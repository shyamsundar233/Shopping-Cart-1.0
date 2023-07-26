package com.sc.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sc.main.dao.InvoiceDao;
import com.sc.main.entity.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    @Autowired
    private InvoiceDao invoiceDao;

    @Override
    public List<Invoice> getAllInvoices() {
        return invoiceDao.getAllInvoices();
    }

    @Override
    public Invoice getInvoiceById(int id) {
        return invoiceDao.getInvoiceById(id);
    }

    @Override
    public String saveInvoice(Invoice invoice) {
        return invoiceDao.saveInvoice(invoice);
    }

    @Override
    public String deleteInvoice(int id) {
        return invoiceDao.deleteInvoice(id);
    }

    @Override
    public Invoice getLastInvoice() {
        return invoiceDao.getLastInvoice();
    }

}
