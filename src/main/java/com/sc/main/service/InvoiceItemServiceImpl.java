package com.sc.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sc.main.dao.InvoiceItemDao;
import com.sc.main.entity.InvoiceItem;

@Service
public class InvoiceItemServiceImpl implements InvoiceItemService {

    @Autowired
    private InvoiceItemDao invoiceItemDao;

    @Override
    public List<InvoiceItem> getAllInvoiceItems() {
        return invoiceItemDao.getAllInvoiceItems();
    }

    @Override
    public InvoiceItem getInvoiceItemById(int id) {
        return invoiceItemDao.getInvoiceItemById(id);
    }

    @Override
    public String saveInvoiceItem(InvoiceItem invoiceItem) {
        return invoiceItemDao.saveInvoiceItem(invoiceItem);
    }

    @Override
    public String deleteInvoiceItem(int id) {
        return invoiceItemDao.deleteInvoiceItem(id);
    }

}
