package com.sc.main.POJO;

import java.util.List;

public class Item {
    private int prodId;
    private String prodName;
    private String prodDesc;
    private List<String> prodTags;
    private String prodImage;
    private double prodPrice;
    private int prodQuantity;

    public Item(int prodId, String prodName, String prodDesc, List<String> prodTags, String prodImage, double prodPrice,
            int prodQuantity) {
        this.prodId = prodId;
        this.prodName = prodName;
        this.prodDesc = prodDesc;
        this.prodTags = prodTags;
        this.prodImage = prodImage;
        this.prodPrice = prodPrice;
        this.prodQuantity = prodQuantity;
    }

    public Item() {
    }

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    public String getProdName() {
        return prodName;
    }

    public void setProdName(String prodName) {
        this.prodName = prodName;
    }

    public String getProdDesc() {
        return prodDesc;
    }

    public void setProdDesc(String prodDesc) {
        this.prodDesc = prodDesc;
    }

    public List<String> getProdTags() {
        return prodTags;
    }

    public void setProdTags(List<String> prodTags) {
        this.prodTags = prodTags;
    }

    public String getProdImage() {
        return prodImage;
    }

    public void setProdImage(String prodImage) {
        this.prodImage = prodImage;
    }

    public double getProdPrice() {
        return prodPrice;
    }

    public void setProdPrice(double prodPrice) {
        this.prodPrice = prodPrice;
    }

    public int getProdQuantity() {
        return prodQuantity;
    }

    public void setProdQuantity(int prodQuantity) {
        this.prodQuantity = prodQuantity;
    }

    @Override
    public String toString() {
        return "Item [prodId=" + prodId + ", prodName=" + prodName + ", prodDesc=" + prodDesc + ", prodTags=" + prodTags
                + ", prodImage=" + prodImage + ", prodPrice=" + prodPrice + ", prodQuantity=" + prodQuantity + "]";
    }

}
