//$Id$
package com.sc.main.repo;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;

public interface PurchaseRepo extends JpaRepository<Purchase, Integer> {
    @Query(value = "SELECT max(purchaseBatch) FROM Purchase")
    public BigDecimal max();

    @Query("SELECT p FROM Purchase p WHERE p.product = :product AND p.prodQuantity > 0 ORDER BY p.product LIMIT 1")
    public Purchase findFirstByProdIdAndQtyGreaterThanZero(@Param("product") Product product);
}
