package com.sc.main.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sc.main.entity.Invoice;

public interface InvoiceRepo extends JpaRepository<Invoice, Integer> {
    Invoice findTopByOrderByInvoiceIdDesc();
}
