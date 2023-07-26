package com.sc.main.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sc.main.entity.InvoiceItem;
import com.sc.main.repo.InvoiceItemRepo;

@Repository
public class InvoiceItemDaoImpl implements InvoiceItemDao {

    @Autowired
    private InvoiceItemRepo invoiceItemRepo;

    @Override
    public List<InvoiceItem> getAllInvoiceItems() {
        return invoiceItemRepo.findAll();
    }

    @Override
    public InvoiceItem getInvoiceItemById(int id) {
        Optional<InvoiceItem> invoiceItem = invoiceItemRepo.findById(id);
        if (invoiceItem.isEmpty()) {
            return invoiceItem.get();
        } else {
            return null;
        }
    }

    @Override
    public String saveInvoiceItem(InvoiceItem invoiceItem) {
        invoiceItemRepo.save(invoiceItem);
        return "Invoice products saved successfully";
    }

    @Override
    public String deleteInvoiceItem(int id) {
        invoiceItemRepo.deleteById(id);
        return "Invoice products deleted successfully";
    }

}
