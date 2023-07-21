import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../UI-Components/ProductCard";

const ViewProduct = (props) => {
  const [prodList, setProdList] = useState(props.prodList);
  useEffect(() => {
    axios.get("http://localhost:8081/api/items").then((resp) => {
      setProdList(resp.data);
    });
  }, []);
  if (prodList) {
    return (
      <div>
        {prodList.map((prod, index) => (
          <ProductCard
            prodId={prod.prodId}
            prodName={prod.prodName}
            prodPrice={prod.prodPrice}
            prodDesc={prod.prodDesc}
            prodTags={prod.prodTags}
            prodImage={prod.prodImage}
          ></ProductCard>
        ))}
      </div>
    );
  }
};

export default ViewProduct;
