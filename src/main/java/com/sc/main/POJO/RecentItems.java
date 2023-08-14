package com.sc.main.POJO;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

public class RecentItems implements Serializable {
    private Set<Integer> prodIds;

    public RecentItems(Set<Integer> prodIds) {
        this.prodIds = prodIds;
    }

    public Set<Integer> getProdIds() {
        return prodIds;
    }

    public void setProdIds(Set<Integer> prodIds) {
        this.prodIds = prodIds;
    }

    @Override
    public String toString() {
        return "RecentItems{" +
                "prodIds=" + prodIds +
                '}';
    }
}
