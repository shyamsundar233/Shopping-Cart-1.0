package com.sc.main.controller;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sc.main.entity.Product;
import com.sc.main.service.ProductService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
@SuppressWarnings("unchecked")
public class ProductController {

	@Autowired
	private ProductService productService;

	@GetMapping("/product")
	public JSONObject getAllProducts() {
		JSONObject response = new JSONObject();
		response.put("allProducts", productService.getAllProducts());
		return response;
	}

	@PostMapping("/product/{id}")
	public JSONObject getProductById(@PathVariable int id) {
		JSONObject response = new JSONObject();
		response.put("product", productService.getProductById(id));
		return response;
	}

	@PostMapping("/product")
	public JSONObject saveProduct(@RequestBody Product product) {
		JSONObject response = new JSONObject();
		response.put("SUCCESS", productService.saveProduct(product));
		return response;
	}

	@DeleteMapping("/product/{id}")
	public JSONObject deleteProduct(@PathVariable int id) {
		JSONObject response = new JSONObject();
		response.put("SUCCESS", productService.deleteProduct(id));
		return response;
	}

}
