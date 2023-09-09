package com.sc.main.controller;

import com.sc.main.POJO.Item;
import com.sc.main.entity.Cart;
import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;
import com.sc.main.service.CartService;
import com.sc.main.utils.CartUtil;
import com.sc.main.utils.ProductUtil;
import com.sc.main.utils.PurchaseUtil;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/cart")
    public JSONObject getAllCartItems() {
        JSONObject response = new JSONObject();
        List<Cart> allCarts = cartService.getAllCartItems();
        JSONArray allCartJsonArray = new JSONArray();
        for (Cart cartItem : allCarts) {
            JSONObject cartJsonObject = cartItem.toJson();
            Purchase purchaseForProduct = PurchaseUtil.getPurchaseForProd(cartItem.getProduct());
            double prodPrice = purchaseForProduct.getProdPrice();
            int prodQty = purchaseForProduct.getProdQuantity();
            cartJsonObject.put("prodPrice", prodPrice);
            cartJsonObject.put("prodQty", prodQty);
            allCartJsonArray.add(cartJsonObject);
        }
        response.put("allCartItems", allCartJsonArray);
        return response;
    }

    @PostMapping("/cart/{id}")
    public JSONObject getCartItemById(@PathVariable int id) {
        JSONObject response = new JSONObject();
        response.put("cartItem", cartService.getCartItemById(id));
        return response;
    }

    @PostMapping("/cart")
    public JSONObject saveCartItem(@RequestBody Cart cart) {
        JSONObject response = new JSONObject();
        Product product = ProductUtil.getProductById(cart.getProduct().getProdId());        
        cart.setProduct(product);
        List<Cart> cartList = cartService.getCartIdByProduct(product);
        try {
            if (cartList.isEmpty()) {                
                response.put("SUCCESS", cartService.saveCartItem(cart));
            } else {
                Cart existCart = cartList.get(0);                
                cart.setItemId(existCart.getItemId());
                cart.setItemQty(cart.getItemQty());
                cartService.saveCartItem(cart);
                response.put("SUCCESS", "Cart item updated successfully");
            }
        } catch (Exception e) {
            if (e.getMessage().equals("Invalid product quantity")) {
                response.put("ERROR", e.getMessage());
            }
        }
        return response;
    }

    @DeleteMapping("/cart/{id}")
    public JSONObject deleteCartItem(@PathVariable int id) {
        JSONObject response = new JSONObject();
        Cart cart = CartUtil.getCartById(id);
        cart.setProduct(null);
        response.put("SUCCESS", cartService.deleteCartItem(cart));
        return response;
    }
}
