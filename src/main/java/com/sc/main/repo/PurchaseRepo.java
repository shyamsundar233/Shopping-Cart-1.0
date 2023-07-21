//$Id$
package com.sc.main.repo;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sc.main.entity.Purchase;

public interface PurchaseRepo extends JpaRepository<Purchase, Integer> {
    @Query(value = "SELECT max(purchaseBatch) FROM Purchase")
    public BigDecimal max();
}
