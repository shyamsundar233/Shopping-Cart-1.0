package com.sc.main.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.sc.main.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

}
