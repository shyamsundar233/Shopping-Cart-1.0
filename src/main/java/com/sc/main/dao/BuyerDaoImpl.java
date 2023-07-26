package com.sc.main.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sc.main.entity.Buyer;
import com.sc.main.repo.BuyerRepo;

@Repository
public class BuyerDaoImpl implements BuyerDao {

    @Autowired
    private BuyerRepo buyerRepo;

    @Override
    public List<Buyer> getAllBuyers() {
        return buyerRepo.findAll();
    }

    @Override
    public Buyer getBuyerById(int id) {
        Optional<Buyer> buyersList = buyerRepo.findById(id);
        if (buyersList.isEmpty()) {
            return null;
        } else {
            return buyersList.get();
        }
    }

    @Override
    public String saveBuyer(Buyer buyer) {
        buyerRepo.save(buyer);
        return "Buyer created successfully";
    }

    @Override
    public String deleteBuyer(int id) {
        buyerRepo.deleteById(id);
        return "Buyer deleted successfully";
    }

}
