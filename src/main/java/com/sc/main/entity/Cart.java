package com.sc.main.entity;

import org.json.simple.JSONObject;

import jakarta.persistence.*;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "prodId", referencedColumnName = "prodId")
    private Product product;

    private int itemQty;

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getItemQty() {
        return itemQty;
    }

    public void setItemQty(int itemQty) {
        this.itemQty = itemQty;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "itemId=" + itemId +
                ", product=" + product +
                ", itemQty=" + itemQty +
                '}';
    }

    public JSONObject toJson() {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("itemId", itemId);
        jsonObject.put("product", product);
        jsonObject.put("itemQty", itemQty);
        return jsonObject;
    }
}
