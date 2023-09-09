package com.sc.main.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sc.main.entity.Cart;
import com.sc.main.service.CartService;

@Component
public class CartUtil {

    public static CartService cartService;

    public CartUtil() {

    }

    @Autowired
    public CartUtil(CartService cartService) {
        setCartService(cartService);
    }

    public static CartService getCartService() {
        return cartService;
    }

    public static void setCartService(CartService cartService) {
        CartUtil.cartService = cartService;
    }

    public static Cart getCartById(int id) {
        return cartService.getCartItemById(id);
    }

}
