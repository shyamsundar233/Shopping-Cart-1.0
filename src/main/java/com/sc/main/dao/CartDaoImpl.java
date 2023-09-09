package com.sc.main.dao;

import com.sc.main.entity.Cart;
import com.sc.main.entity.Product;
import com.sc.main.repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CartDaoImpl implements CartDao {

    @Autowired
    private CartRepo cartRepo;

    @Override
    public List<Cart> getAllCartItems() {
        return cartRepo.findAll();
    }

    @Override
    public Cart getCartItemById(int id) {
        Optional<Cart> cartItem = cartRepo.findById(id);
        if (cartItem.isEmpty()) {
            return null;
        } else {
            return cartItem.get();
        }
    }

    @Override
    public String saveCartItem(Cart cart) {
        cartRepo.save(cart);
        return "Cart item added successfully";
    }

    @Override
    public String deleteCartItem(int id) {
        cartRepo.deleteById(id);
        return "Cart item deleted successfully";
    }

    @Override
    public List<Cart> getCartIdByProduct(Product product) {
        return cartRepo.getCartIdByProduct(product);
    }

    @Override
    public String deleteCartItem(Cart cart) {
        cartRepo.delete(cart);
        return "Cart item deleted successfully";
    }
}
