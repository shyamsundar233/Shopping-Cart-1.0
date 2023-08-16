package com.sc.main.controller;

import java.util.ArrayList;
import java.util.List;

import com.sc.main.POJO.SalesItem;
import com.sc.main.utils.ProductUtil;
import com.sc.main.utils.PurchaseUtil;
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
import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;
import com.sc.main.service.InvoiceItemService;
import com.sc.main.service.InvoiceService;
import com.sc.main.service.ProductService;
import com.sc.main.service.PurchaseService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
@SuppressWarnings("unchecked")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @Autowired
    private InvoiceItemService invoiceItemService;

    @Autowired
    private ProductService productService;

    @Autowired
    private PurchaseService purchaseService;

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
    public JSONObject saveInvoice(@RequestBody Invoice invoice) {
        JSONObject response = new JSONObject();
        response.put("SUCCESS", invoiceService.saveInvoice(invoice));
        return response;
    }

    @PostMapping("/saveInvoice")
    public JSONObject saveInvoice(@RequestBody Sales sales) {
        JSONObject response = new JSONObject();
        Invoice invoice = sales.getInvoice();
        String invoiceResponse = invoiceService.saveInvoice(invoice);
        List<SalesItem> salesItemList = sales.getSalesItems();
        List<InvoiceItem> invoiceItems = new ArrayList<InvoiceItem>();
        for (SalesItem salesItem : salesItemList) {
            InvoiceItem invoiceItem = new InvoiceItem();
            Product product = ProductUtil.getProductById(salesItem.getProdId());
            Purchase purchase = PurchaseUtil.getPurchaseForProd(product);
            invoiceItem.setProduct(product);
            invoiceItem.setProdQuantity(salesItem.getProdQty());
            invoiceItem.setProdPrice(purchase.getProdPrice());
            double prodAmount = salesItem.getProdQty() * purchase.getProdPrice();
            invoiceItem.setProdAmount(prodAmount);
            invoiceItems.add(invoiceItem);
        }
        Invoice lastInvoice = invoiceService.getLastInvoice();
        for (InvoiceItem invoiceItem : invoiceItems) {
            updateProdQty(invoiceItem.getProduct().getProdId(), invoiceItem.getProdQuantity());
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

    public void updateProdQty(int prodId, int prodQty) {
        Product product = productService.getProductById(prodId);
        Purchase purchase = purchaseService.getPurchaseForProduct(product);
        int updateProdQty = purchase.getProdQuantity() - prodQty;
        purchase.setProdQuantity(updateProdQty);
        purchaseService.savePurchase(purchase);
    }

}
