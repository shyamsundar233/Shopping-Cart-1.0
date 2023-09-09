package com.sc.main.repo;

import com.sc.main.entity.Cart;
import com.sc.main.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface CartRepo extends JpaRepository<Cart, Integer> {
   List<Cart> getCartIdByProduct(Product product);
    
}
