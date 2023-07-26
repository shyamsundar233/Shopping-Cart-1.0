package com.sc.main.controller;

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

import com.sc.main.entity.Buyer;
import com.sc.main.service.BuyerService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
@SuppressWarnings("unchecked")
public class BuyerController {

    @Autowired
    private BuyerService buyerService;

    @GetMapping("/buyer")
    public JSONObject getAllBuyers() {
        JSONObject response = new JSONObject();
        response.put("allBuyers", buyerService.getAllBuyers());
        return response;
    }

    @PostMapping("/buyer/{id}")
    public JSONObject getBuyerById(@PathVariable int id) {
        JSONObject response = new JSONObject();
        response.put("buyer", buyerService.getBuyerById(id));
        return response;
    }

    @PostMapping("/buyer")
    public JSONObject saveBuyer(@RequestBody Buyer buyer) {
        JSONObject response = new JSONObject();
        response.put("SUCCESS", buyerService.saveBuyer(buyer));
        return response;
    }

    @DeleteMapping("/buyer/{id}")
    public JSONObject deleteBuyer(@PathVariable int id) {
        JSONObject response = new JSONObject();
        response.put("SUCCESS", buyerService.deleteBuyer(id));
        return response;
    }

}
