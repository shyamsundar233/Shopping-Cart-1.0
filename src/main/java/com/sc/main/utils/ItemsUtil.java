package com.sc.main.utils;

import com.sc.main.POJO.Item;
import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;
import com.sc.main.service.ProductService;
import com.sc.main.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ItemsUtil {

    private static PurchaseService purchaseService;
    private static ProductService productService;

    @Autowired
    public ItemsUtil(ProductService productService, PurchaseService purchaseService) {
        setProductService(productService);
        setPurchaseService(purchaseService);
    }

    public static void setProductService(ProductService productService) {
        ItemsUtil.productService = productService;
    }

    public static void setPurchaseService(PurchaseService purchaseService) {
        ItemsUtil.purchaseService = purchaseService;
    }

    public static Item getItemByProdId(int prodId) {
        Product product = productService.getProductById(prodId);
        Purchase purchase = purchaseService.getPurchaseForProduct(product);
        if (product != null && purchase != null) {
            Item item = new Item(product.getProdId(), product.getProdName(), product.getProdDesc(),
                    product.getProdTags(),
                    product.getProdImage(), purchase.getProdPrice(), purchase.getProdQuantity());
            return item;
        } else {
            return null;
        }
    }
}
