package com.sc.main.service;

import java.util.List;

import com.sc.main.entity.Buyer;

public interface BuyerService {
    public List<Buyer> getAllBuyers();

    public Buyer getBuyerById(int id);

    public String saveBuyer(Buyer buyer);

    public String deleteBuyer(int id);
}
