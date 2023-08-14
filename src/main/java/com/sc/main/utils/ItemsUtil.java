package com.sc.main.utils;

import com.sc.main.POJO.Item;
import com.sc.main.entity.Product;
import com.sc.main.entity.Purchase;
import com.sc.main.service.ProductService;
import com.sc.main.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;

public class ItemsUtil {

    @Autowired
    private PurchaseService purchaseService;

    @Autowired
    private ProductService productService;

    public Item getItemByProdId(int prodId){
        Product product = productService.getProductById(prodId);
        Purchase purchase = purchaseService.getPurchaseForProduct(product);
        Item item = new Item(product.getProdId(), product.getProdName(), product.getProdDesc(), product.getProdTags(),
                product.getProdImage(), purchase.getProdPrice(), purchase.getProdQuantity());
        return item;
    }
}
