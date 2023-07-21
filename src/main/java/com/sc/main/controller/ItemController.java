package com.sc.main.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sc.main.entity.Purchase;
import com.sc.main.service.PurchaseService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
@SuppressWarnings("unchecked")
public class ItemController {

    @Autowired
    private PurchaseService purchaseService;

    // @Autowired
    // private ProductService productService;

    @GetMapping("/items")
    public JSONArray getAllItems() {
        JSONArray allItemJson = new JSONArray();
        List<Purchase> purchaseList = purchaseService.getAllPurchase();
        for (Purchase purchase : purchaseList) {
            JSONObject itemJSON = new JSONObject();
            itemJSON.put("prodId", purchase.getProduct().getProdId());
            itemJSON.put("prodName", purchase.getProduct().getProdName());
            itemJSON.put("prodDesc", purchase.getProduct().getProdDesc());
            itemJSON.put("prodTags", purchase.getProduct().getProdTags());
            itemJSON.put("prodImage", purchase.getProduct().getProdImage());
            itemJSON.put("prodPrice", purchase.getProdPrice());
            allItemJson.add(itemJSON);
        }
        return allItemJson;
    }

}
