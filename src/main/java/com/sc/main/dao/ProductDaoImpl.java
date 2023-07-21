package com.sc.main.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sc.main.entity.Product;
import com.sc.main.repo.ProductRepo;

@Repository
public class ProductDaoImpl implements ProductDao {

	@Autowired
	private ProductRepo productRepo;

	@Override
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}

	@Override
	public String saveProduct(Product product) {
		productRepo.save(product);
		return "Product created successfully";
	}

	@Override
	public Product getProductById(int id) {
		Optional<Product> productsList = productRepo.findById(id);
		if (productsList.isEmpty()) {
			return null;
		} else {
			return productsList.get();
		}

	}

	@Override
	public String deleteProduct(int id) {
		productRepo.deleteById(id);
		return "Product deleted successfully";
	}

}
