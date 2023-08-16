package com.sc.main.POJO;

import java.util.List;

import com.sc.main.entity.Invoice;
import com.sc.main.entity.InvoiceItem;

public class Sales {
    private Invoice invoice;
    private List<SalesItem> salesItems;

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }

    public List<SalesItem> getSalesItems() {
        return salesItems;
    }

    public void setSalesItems(List<SalesItem> salesItems) {
        this.salesItems = salesItems;
    }

    @Override
    public String toString() {
        return "Sales{" +
                "invoice=" + invoice +
                ", salesItems=" + salesItems +
                '}';
    }
}
