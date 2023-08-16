package com.sc.main.entity;

import jakarta.persistence.*;

@Entity
public class InvoiceItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int invPrdId;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "prodId", referencedColumnName = "prodId")
    private Product product;
    private int prodQuantity;
    private double prodPrice;
    private double prodAmount;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoiceId", referencedColumnName = "invoiceId")
    private Invoice invoice;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getProdQuantity() {
        return prodQuantity;
    }

    public void setProdQuantity(int prodQuantity) {
        this.prodQuantity = prodQuantity;
    }

    public double getProdPrice() {
        return prodPrice;
    }

    public void setProdPrice(double prodPrice) {
        this.prodPrice = prodPrice;
    }

    public double getProdAmount() {
        return prodAmount;
    }

    public void setProdAmount(double prodAmount) {
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
        return "InvoiceItem{" +
                "invPrdId=" + invPrdId +
                ", product=" + product +
                ", prodQuantity=" + prodQuantity +
                ", prodPrice=" + prodPrice +
                ", prodAmount=" + prodAmount +
                '}';
    }

    public int getInvPrdId() {
        return invPrdId;
    }

    public void setInvPrdId(int invPrdId) {
        this.invPrdId = invPrdId;
    }

}
