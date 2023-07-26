package com.sc.main.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class InvoiceItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int invPrdId;
    private int prodId;
    private int prodQuantity;
    private int prodPrice;
    private int prodAmount;
    @ManyToOne
    @JoinColumn(name = "invoiceId", referencedColumnName = "invoiceId")
    private Invoice invoice;

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    public int getProdQuantity() {
        return prodQuantity;
    }

    public void setProdQuantity(int prodQuantity) {
        this.prodQuantity = prodQuantity;
    }

    public int getProdPrice() {
        return prodPrice;
    }

    public void setProdPrice(int prodPrice) {
        this.prodPrice = prodPrice;
    }

    public int getProdAmount() {
        return prodAmount;
    }

    public void setProdAmount(int prodAmount) {
        this.prodAmount = prodAmount;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }

    @Override
    public String toString() {
        return "InvoiceItem [prodId=" + prodId + ", prodQuantity=" + prodQuantity + ", prodPrice=" + prodPrice
                + ", prodAmount=" + prodAmount + ", invoice=" + invoice + "]";
    }

    public int getInvPrdId() {
        return invPrdId;
    }

    public void setInvPrdId(int invPrdId) {
        this.invPrdId = invPrdId;
    }

}
