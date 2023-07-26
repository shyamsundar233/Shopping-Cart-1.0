package com.sc.main.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sc.main.entity.Buyer;

public interface BuyerRepo extends JpaRepository<Buyer, Integer> {

}
