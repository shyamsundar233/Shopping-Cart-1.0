package com.sc.main.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sc.main.entity.InvoiceItem;

public interface InvoiceItemRepo extends JpaRepository<InvoiceItem, Integer> {

}
