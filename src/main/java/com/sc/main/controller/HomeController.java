package com.sc.main.controller;

import org.json.simple.JSONObject;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {
    @GetMapping("/getRole")
    public JSONObject getCurrentUserRole(Authentication authentication){
        JSONObject response = new JSONObject();
        response.put("role", authentication.getAuthorities().toArray()[0].toString().substring(5));
        return response;
    }
}
