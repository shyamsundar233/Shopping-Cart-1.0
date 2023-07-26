package com.sc.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sc.main.dao.BuyerDao;
import com.sc.main.entity.Buyer;

@Service
public class BuyerServiceImpl implements BuyerService {

    @Autowired
    private BuyerDao buyerDao;

    @Override
    public List<Buyer> getAllBuyers() {
        return buyerDao.getAllBuyers();
    }

    @Override
    public Buyer getBuyerById(int id) {
        return buyerDao.getBuyerById(id);
    }

    @Override
    public String saveBuyer(Buyer buyer) {
        return buyerDao.saveBuyer(buyer);
    }

    @Override
    public String deleteBuyer(int id) {
        return buyerDao.deleteBuyer(id);
    }

}
