package com.sc.main.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.sc.main.POJO.RecentItems;
import com.sc.main.utils.ItemsUtil;
import com.sc.main.utils.RecentItemsUtil;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sc.main.POJO.Item;
import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;
import com.sc.main.service.ProductService;
import com.sc.main.service.PurchaseService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
@SuppressWarnings("unchecked")
public class ItemController {

    @Autowired
    private PurchaseService purchaseService;

    @Autowired
    private ProductService productService;

    @GetMapping("/items")
    public JSONArray getAllItems() {
        JSONArray allItemJson = new JSONArray();
        List<Product> productsList = productService.getAllProducts();
        for (Product product : productsList) {
            Purchase purchase = purchaseService.getPurchaseForProduct(product);
            if (purchase != null) {
                Item item = new Item(product.getProdId(), product.getProdName(), product.getProdDesc(),
                        product.getProdTags(), product.getProdImage(), purchase.getProdPrice(),
                        purchase.getProdQuantity());
                allItemJson.add(item);
            }
        }
        Set<Integer> prodIds = new HashSet<Integer>();
        prodIds.add(1);
        prodIds.add(2);
        prodIds.add(3);
        prodIds.add(10);
        RecentItemsUtil.addRecentItemsToSerialize(prodIds);
        return allItemJson;
    }

    @PostMapping("/items/{prodId}")
    public JSONObject getItemByProdId(@PathVariable int prodId) {
        JSONObject response = new JSONObject();
        Product product = productService.getProductById(prodId);
        Purchase purchase = purchaseService.getPurchaseForProduct(product);
        Item item = new Item(product.getProdId(), product.getProdName(), product.getProdDesc(), product.getProdTags(),
                product.getProdImage(), purchase.getProdPrice(), purchase.getProdQuantity());
        response.put("item", item);
        return response;
    }

    @GetMapping("/recentItems")
    public JSONArray recentItems() {
        JSONArray response = new JSONArray();
        Set<Integer> prodIds = RecentItemsUtil.getRecentItemsToSerialize();
        for (int prodId : prodIds) {
            Item item = ItemsUtil.getItemByProdId(prodId);
            if (item != null) {
                response.add(item);
            }
        }
        return response;
    }

}
