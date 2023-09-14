import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../UI-Components/NavButton";
import CrudTable from "../UI-Components/CrudTable";

let headers = [
  "Product name",
  "Product description",
  "Product tags",
  "Options",
];

const constructTableData = (allProducts) => {
  let tableData = {};
  allProducts.forEach((product) => {
    let tempProdTags = "";
    let len = product.prodTags.length;
    for (let ind = 0; ind < len; ind++) {
      tempProdTags =
        ind !== len - 1
          ? tempProdTags + product.prodTags[ind] + ", "
          : tempProdTags + product.prodTags[ind];
    }
    tableData[product.prodId] = [
      product.prodName,
      product.prodDesc,
      tempProdTags,
    ];
  });
  return tableData;
};

const ListProduct = () => {
  const [prodList, setProdList] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/api/product").then((resp) => {
      setProdList(constructTableData(resp.data.allProducts));
    });
  }, []);

  const editProduct = (id) => {
    nav("/admin/create", { state: { prodId: id } });
  };
  const deleteProduct = (id) => {
    const tempProdList = { ...prodList };
    delete tempProdList[id];
    setProdList(tempProdList);
    axios.delete("http://localhost:8081/api/product/" + id).then((resp) => {
      alert("Product deleted successfully");
    });
  };

  if (!prodList) {
    return <div>No products</div>;
  } else {
    return (
      <div style={{ position: "absolute", top: "10px", minWidth: "100%" }}>
        <h2>Product List</h2>
        <NavButton
          label="Create product"
          path="/admin/create"
          variant="outlined"
        />{" "}
        &nbsp;
        <NavButton
          label="Create purchase"
          path="/admin/createPurchase"
          variant="outlined"
        />{" "}
        &nbsp;
        <NavButton
          label="List purchase"
          path="/admin/listPurchase"
          variant="outlined"
        />{" "}
        &nbsp;
        <CrudTable
          headers={headers}
          editCallback={editProduct}
          deleteCallback={deleteProduct}
          tableData={prodList}
        />
      </div>
    );
  }
};

export default ListProduct;
