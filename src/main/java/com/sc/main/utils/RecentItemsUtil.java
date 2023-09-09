package com.sc.main.utils;

import com.sc.main.POJO.RecentItems;
import com.sc.main.service.ProductService;
import com.sc.main.service.PurchaseService;

import java.io.*;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RecentItemsUtil {
    private static final String SERIALIZE_PATH = "RecentItems.ser";

    public static void addRecentItemsToSerialize(Set<Integer> prodIds) {
        RecentItems recentItems = new RecentItems(prodIds);
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(SERIALIZE_PATH))) {
            oos.writeObject(recentItems);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static Set<Integer> getRecentItemsToSerialize() {
        RecentItems recentItems = null;
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(SERIALIZE_PATH))) {
            recentItems = (RecentItems) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        if (recentItems != null) {
            return recentItems.getProdIds();
        } else {
            return null;
        }
    }
}
