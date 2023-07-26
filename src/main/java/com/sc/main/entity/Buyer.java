package com.sc.main.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Buyer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int buyerId;
    private String buyerName;
    private String buyerPhone;
    private String buyerAddress;

    public int getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(int buyerId) {
        this.buyerId = buyerId;
    }

    public String getBuyerName() {
        return buyerName;
    }

    public void setBuyerName(String buyerName) {
        this.buyerName = buyerName;
    }

    public String getBuyerPhone() {
        return buyerPhone;
    }

    public void setBuyerPhone(String buyerPhone) {
        this.buyerPhone = buyerPhone;
    }

    public String getBuyerAddress() {
        return buyerAddress;
    }

    public void setBuyerAddress(String buyerAddress) {
        this.buyerAddress = buyerAddress;
    }

    @Override
    public String toString() {
        return "Buyer [buyerId=" + buyerId + ", buyerName=" + buyerName + ", buyerPhone=" + buyerPhone
                + ", buyerAddress=" + buyerAddress + "]";
    }

}