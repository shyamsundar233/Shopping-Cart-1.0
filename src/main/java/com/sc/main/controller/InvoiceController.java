package com.sc.main.controller;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sc.main.POJO.Sales;
import com.sc.main.entity.Invoice;
import com.sc.main.entity.InvoiceItem;
import com.sc.main.service.InvoiceItemService;
import com.sc.main.service.InvoiceService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
@SuppressWarnings("unchecked")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @Autowired
    private InvoiceItemService invoiceItemService;

    @GetMapping("/invoice")
    public JSONObject getAllInvoices() {
        JSONObject response = new JSONObject();
        response.put("allInvoices", invoiceService.getAllInvoices());
        return response;
    }

    @PostMapping("/invoice/{id}")
    public JSONObject getInvoiceById(@PathVariable int id) {
        JSONObject response = new JSONObject();
        response.put("invoice", invoiceService.getInvoiceById(id));
        return response;
    }

    @PostMapping("/invoice")
    public JSONObject saveInvoice(@RequestBody Invoice invoice){
        JSONObject response = new JSONObject();
        response.put("SUCCESS", invoiceService.saveInvoice(invoice));
        return response;
    }

    @PostMapping("/saveInvoice")
    public JSONObject saveInvoice(@RequestBody Sales sales) {
        JSONObject response = new JSONObject();
        Invoice invoice = sales.getInvoice();
        String invoiceResponse = invoiceService.saveInvoice(invoice);
        List<InvoiceItem> invoiceItems = sales.getInvoiceItem();
        Invoice lastInvoice = invoiceService.getLastInvoice();
        for (InvoiceItem invoiceItem : invoiceItems) {
            invoiceItem.setInvoice(lastInvoice);
            invoiceItemService.saveInvoiceItem(invoiceItem);
        }
        response.put("SUCCESS", invoiceResponse);
        return response;
    }

    @DeleteMapping("/invoice/{id}")
    public JSONObject deleteInvoice(@PathVariable int id) {
        JSONObject response = new JSONObject();
        response.put("SUCCESS", invoiceService.deleteInvoice(id));
        return response;
    }

}
