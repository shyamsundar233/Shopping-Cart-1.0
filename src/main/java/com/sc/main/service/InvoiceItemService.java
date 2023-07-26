package com.sc.main.service;

import java.util.List;

import com.sc.main.entity.InvoiceItem;

public interface InvoiceItemService {
    public List<InvoiceItem> getAllInvoiceItems();

    public InvoiceItem getInvoiceItemById(int id);

    public String saveInvoiceItem(InvoiceItem invoiceItem);

    public String deleteInvoiceItem(int id);
}
