package com.sc.main.utils;

import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;
import com.sc.main.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PurchaseUtil {

    private static PurchaseService purchaseService;

    public PurchaseUtil() {

    }

    @Autowired
    public PurchaseUtil(PurchaseService purchaseService) {
        setPurchaseService(purchaseService);
    }

    public static PurchaseService getPurchaseService() {
        return purchaseService;
    }

    public static void setPurchaseService(PurchaseService purchaseService) {
        PurchaseUtil.purchaseService = purchaseService;
    }

    public static Purchase getPurchaseForProd(Product product) {
        return purchaseService.getPurchaseForProduct(product);
    }
}
