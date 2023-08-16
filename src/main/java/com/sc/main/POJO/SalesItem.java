package com.sc.main.POJO;

public class SalesItem {
    private int prodId;
    private int prodQty;

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    public int getProdQty() {
        return prodQty;
    }

    public void setProdQty(int prodQty) {
        this.prodQty = prodQty;
    }

    @Override
    public String toString() {
        return "SalesItem{" +
                "prodId=" + prodId +
                ", prodQty=" + prodQty +
                '}';
    }
}
