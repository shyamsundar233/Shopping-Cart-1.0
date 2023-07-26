package com.sc.main.service;

import java.util.List;

import com.sc.main.entity.Invoice;

public interface InvoiceService {
    public List<Invoice> getAllInvoices();

    public Invoice getInvoiceById(int id);

    public String saveInvoice(Invoice invoice);

    public String deleteInvoice(int id);

    public Invoice getLastInvoice();
}
