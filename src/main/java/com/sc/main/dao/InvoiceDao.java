package com.sc.main.dao;

import java.util.List;

import com.sc.main.entity.Invoice;

public interface InvoiceDao {
    public List<Invoice> getAllInvoices();

    public Invoice getInvoiceById(int id);

    public String saveInvoice(Invoice invoice);

    public String deleteInvoice(int id);

    public Invoice getLastInvoice();
}
