package com.sc.main.service;

import com.sc.main.dao.CartDao;
import com.sc.main.entity.Cart;
import com.sc.main.entity.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao cartDao;

    @Override
    public List<Cart> getAllCartItems() {
        return cartDao.getAllCartItems();
    }

    @Override
    public Cart getCartItemById(int id) {
        return cartDao.getCartItemById(id);
    }

    @Override
    public String saveCartItem(Cart cart) {
        return cartDao.saveCartItem(cart);
    }

    @Override
    public String deleteCartItem(int id) {
        return cartDao.deleteCartItem(id);
    }

    @Override
    public List<Cart> getCartIdByProduct(Product product) {
        return cartDao.getCartIdByProduct(product);
    }

    @Override
    public String deleteCartItem(Cart cart) {
        return cartDao.deleteCartItem(cart);
    }
}
