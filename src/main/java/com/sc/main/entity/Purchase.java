//$Id$
package com.sc.main.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Purchase {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int purchaseId;

	private int purchaseBatch;

	@ManyToOne
	@JoinColumn(name = "prodId", referencedColumnName = "prodId")
	private Product product;
	private double prodPrice;

	public Purchase(int purchaseId, int purchaseBatch, Product product, double prodPrice) {
		this.purchaseId = purchaseId;
		this.purchaseBatch = purchaseBatch;
		this.product = product;
		this.prodPrice = prodPrice;
	}

	public Purchase(int purchaseBatch, Product product, double prodPrice) {
		this.purchaseBatch = purchaseBatch;
		this.product = product;
		this.prodPrice = prodPrice;
	}

	public Purchase() {
	}

	public int getPurchaseId() {
		return purchaseId;
	}

	public void setPurchaseId(int purchaseId) {
		this.purchaseId = purchaseId;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public double getProdPrice() {
		return prodPrice;
	}

	public void setProdPrice(double prodPrice) {
		this.prodPrice = prodPrice;
	}

	public int getPurchaseBatch() {
		return purchaseBatch;
	}

	public void setPurchaseBatch(int purchaseBatch) {
		this.purchaseBatch = purchaseBatch;
	}

	@Override
	public String toString() {
		return "Purchase [purchaseId=" + purchaseId + ", purchaseBatch=" + purchaseBatch + ", product=" + product
				+ ", prodPrice=" + prodPrice + "]";
	}

}
