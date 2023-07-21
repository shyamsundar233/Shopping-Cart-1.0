//$Id$
package com.sc.main.dao;

import java.util.List;

import com.sc.main.entity.Purchase;

public interface PurchaseDao {
	public List<Purchase> getAllPurchase();

	public Purchase getPurchaseById(int id);

	public String savePurchase(Purchase purchase);

	public String deletePurchase(int id);

	public int getLastBatchNumber();
}
