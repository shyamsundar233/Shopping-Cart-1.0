//$Id$
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
import com.sc.main.entity.Purchase;
import com.sc.main.service.ProductService;
import com.sc.main.service.PurchaseService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
@SuppressWarnings("unchecked")
public class PurchaseController {

	@Autowired
	private PurchaseService purchaseService;

	@Autowired
	private ProductService productService;

	@GetMapping("/purchase")
	public JSONObject getAllPurchase() {
		JSONObject response = new JSONObject();
		response.put("allPurchase", purchaseService.getAllPurchase());
		return response;
	}

	@PostMapping("/purchase/{id}")
	public JSONObject getPurchaseById(@PathVariable int id) {
		JSONObject response = new JSONObject();
		response.put("purchase", purchaseService.getPurchaseById(id));
		return response;
	}

	@PostMapping("/purchase")
	public JSONObject savePurchase(@RequestBody JSONObject payLoad) {
		JSONObject response = new JSONObject();
		int prodId = Integer.parseInt(payLoad.get("prodId").toString());
		int prodPrice = Integer.parseInt(payLoad.get("prodPrice").toString());
		int prodQuantity = Integer.parseInt(payLoad.get("prodQuantity").toString());
		Product product = productService.getProductById(prodId);
		String operation = payLoad.get("operation").toString();
		Purchase purchase;
		if (operation.equals("create")) {
			purchase = new Purchase(purchaseService.getLastBatchNumber() + 1, product, prodPrice, prodQuantity);
		} else {
			int purchaseId = Integer.parseInt(payLoad.get("purchaseId").toString());
			Purchase existPurchase = purchaseService.getPurchaseById(purchaseId);
			purchase = new Purchase(purchaseId, existPurchase.getPurchaseBatch(), product, prodPrice, prodQuantity);
		}
		response.put("SUCCESS", purchaseService.savePurchase(purchase));
		return response;
	}

	@DeleteMapping("/purchase/{id}")
	public JSONObject deletePurchase(@PathVariable int id) {
		JSONObject response = new JSONObject();
		response.put("SUCCESS", purchaseService.deletePurchase(id));
		return response;
	}

}
