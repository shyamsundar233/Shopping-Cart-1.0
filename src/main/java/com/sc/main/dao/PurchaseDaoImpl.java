//$Id$
package com.sc.main.dao;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;
import com.sc.main.repo.PurchaseRepo;

@Repository
public class PurchaseDaoImpl implements PurchaseDao {

	@Autowired
	private PurchaseRepo purchaseRepo;

	@Override
	public List<Purchase> getAllPurchase() {
		return purchaseRepo.findAll();
	}

	@Override
	public Purchase getPurchaseById(int id) {
		Optional<Purchase> purchaseList = purchaseRepo.findById(id);
		if (purchaseList.isEmpty()) {
			return null;
		} else {
			return purchaseList.get();
		}
	}

	@Override
	public String savePurchase(Purchase purchase) {
		purchaseRepo.save(purchase);
		return "Purchase created successfully";
	}

	@Override
	public String deletePurchase(int id) {
		purchaseRepo.deleteById(id);
		return "Purchase deleted successfully";
	}

	@Override
	public int getLastBatchNumber() {
		BigDecimal lastVal = purchaseRepo.max();
		if (lastVal != null) {
			return lastVal.intValue();
		} else {
			return 0;
		}
	}

	@Override
	public Purchase getPurchaseForProduct(Product product) {
		return purchaseRepo.findFirstByProdIdAndQtyGreaterThanZero(product);
	}

}
