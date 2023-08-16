package com.sc.main.utils;

import com.sc.main.entity.Product;
import com.sc.main.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductUtil {

    private static ProductService productService;

    public ProductUtil() {

    }

    @Autowired
    public ProductUtil(ProductService productService) {
        setProductService(productService);
    }

    public static ProductService getProductService() {
        return productService;
    }

    public static void setProductService(ProductService productService) {
        ProductUtil.productService = productService;
    }

    public static Product getProductById(int prodId) {
        return productService.getProductById(prodId);
    }

}
