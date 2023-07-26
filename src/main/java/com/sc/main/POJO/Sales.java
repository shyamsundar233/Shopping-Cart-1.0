package com.sc.main.POJO;

import java.util.List;

import com.sc.main.entity.Invoice;
import com.sc.main.entity.InvoiceItem;

public class Sales {
    private Invoice invoice;
    private List<InvoiceItem> invoiceItem;

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }

    public List<InvoiceItem> getInvoiceItem() {
        return invoiceItem;
    }

    public void setInvoiceItem(List<InvoiceItem> invoiceItem) {
        this.invoiceItem = invoiceItem;
    }

}
