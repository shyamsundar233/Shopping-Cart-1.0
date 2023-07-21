package com.sc.main.service;

import java.util.List;

import com.sc.main.entity.Product;

public interface ProductService {
	public List<Product> getAllProducts();

	public Product getProductById(int id);

	public String saveProduct(Product product);

	public String deleteProduct(int id);
}
