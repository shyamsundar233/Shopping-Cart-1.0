//$Id$
package com.sc.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sc.main.dao.PurchaseDao;
import com.sc.main.entity.Purchase;

@Service
public class PurchaseServiceImpl implements PurchaseService {

	@Autowired
	private PurchaseDao purchaseDao;

	@Override
	public List<Purchase> getAllPurchase() {
		return purchaseDao.getAllPurchase();
	}

	@Override
	public Purchase getPurchaseById(int id) {
		return purchaseDao.getPurchaseById(id);
	}

	@Override
	public String savePurchase(Purchase purchase) {
		return purchaseDao.savePurchase(purchase);
	}

	@Override
	public String deletePurchase(int id) {
		return purchaseDao.deletePurchase(id);
	}

	@Override
	public int getLastBatchNumber() {
		return purchaseDao.getLastBatchNumber();
	}

}
