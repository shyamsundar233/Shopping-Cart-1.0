package com.sc.main.service;

import com.sc.main.entity.Cart;
import com.sc.main.entity.Product;

import java.util.List;

public interface CartService {
    public List<Cart> getAllCartItems();

    public Cart getCartItemById(int id);

    public String saveCartItem(Cart cart);

    public String deleteCartItem(int id);

    public String deleteCartItem(Cart cart);

    public List<Cart> getCartIdByProduct(Product product);
}
