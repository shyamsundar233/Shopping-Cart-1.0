package com.sc.main.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sc.main.entity.Invoice;
import com.sc.main.repo.InvoiceRepo;

@Repository
public class InvoiceDaoImpl implements InvoiceDao {

    @Autowired
    private InvoiceRepo invoiceRepo;

    @Override
    public List<Invoice> getAllInvoices() {
        return invoiceRepo.findAll();
    }

    @Override
    public Invoice getInvoiceById(int id) {
        Optional<Invoice> invoiceList = invoiceRepo.findById(id);
        if (invoiceList.isEmpty()) {
            return null;
        } else {
            return invoiceList.get();
        }
    }

    @Override
    public String saveInvoice(Invoice invoice) {
        invoiceRepo.save(invoice);
        return "Invoice created successfully";
    }

    @Override
    public String deleteInvoice(int id) {
        invoiceRepo.deleteById(id);
        return "Invoice deleted successfully";
    }

    @Override
    public Invoice getLastInvoice() {
        return invoiceRepo.findTopByOrderByInvoiceIdDesc();
    }

}
