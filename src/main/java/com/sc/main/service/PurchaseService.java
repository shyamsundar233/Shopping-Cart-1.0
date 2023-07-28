//$Id$
package com.sc.main.service;

import java.util.List;

import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;

public interface PurchaseService {
	public List<Purchase> getAllPurchase();

	public Purchase getPurchaseById(int id);

	public String savePurchase(Purchase purchase);

	public String deletePurchase(int id);

	public int getLastBatchNumber();

	public Purchase getPurchaseForProduct(Product product);
}
