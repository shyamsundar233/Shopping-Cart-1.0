package com.sc.main.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int invoiceId;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_time", nullable = false, updatable = false)
    private Date createdTime;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "modified_time", nullable = false)
    private Date modifiedTime;
    @ManyToOne
    @JoinColumn(name = "buyerId", referencedColumnName = "buyerId")
    private Buyer buyer;
    @OneToMany(mappedBy = "invoice")
    private List<InvoiceItem> invoiceItems;
    private int invoiceTotal;

    public int getInvoiceId() {
        return invoiceId;
    }

    public void setInvoiceId(int invoiceId) {
        this.invoiceId = invoiceId;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Date getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(Date modifiedTime) {
        this.modifiedTime = modifiedTime;
    }

    public Buyer getBuyer() {
        return buyer;
    }

    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }

    public List<InvoiceItem> getInvoiceItems() {
        return invoiceItems;
    }

    public void setInvoiceItems(List<InvoiceItem> invoiceItems) {
        this.invoiceItems = invoiceItems;
    }

    public int getInvoiceTotal() {
        return invoiceTotal;
    }

    public void setInvoiceTotal(int invoiceTotal) {
        this.invoiceTotal = invoiceTotal;
    }

    @Override
    public String toString() {
        return "Invoice [invoiceId=" + invoiceId + ", createdTime=" + createdTime + ", modifiedTime=" + modifiedTime
                + ", buyer=" + buyer + ", invoiceItems=" + invoiceItems + ", invoiceTotal=" + invoiceTotal + "]";
    }

    @PrePersist
    protected void onCreate() {
        this.createdTime = new Date();
        this.modifiedTime = this.createdTime;
    }

    @PreUpdate
    protected void onUpdate() {
        this.modifiedTime = new Date();
    }
}
