package com.sc.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.sc.main.dao.ProductDao;
import com.sc.main.entity.Product;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;

	@Override
	public List<Product> getAllProducts() {
		return productDao.getAllProducts();
	}

	@PreAuthorize("hasRole('ADMIN')")
	@Override
	public String saveProduct(Product product) {
		return productDao.saveProduct(product);
	}

	@Override
	public Product getProductById(int id) {
		return productDao.getProductById(id);
	}

	@Override
	public String deleteProduct(int id) {
		return productDao.deleteProduct(id);
	}

}
