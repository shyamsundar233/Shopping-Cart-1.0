package com.sc.main.dao;

import java.util.List;

import com.sc.main.entity.Buyer;

public interface BuyerDao {
    public List<Buyer> getAllBuyers();

    public Buyer getBuyerById(int id);

    public String saveBuyer(Buyer buyer);

    public String deleteBuyer(int id);
}
