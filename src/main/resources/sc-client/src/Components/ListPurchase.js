import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../UI-Components/NavButton";
import CrudTable from "../UI-Components/CrudTable";

let headers = [
  "Batch",
  "Product name",
  "Product price",
  "Product quantity",
  "Options",
];

const constructTableData = (allPurchase) => {
  let tableData = {};
  allPurchase.forEach((purchase) => {
    tableData[purchase.purchaseId] = [
      purchase.purchaseBatch,
      purchase.product.prodName,
      purchase.prodPrice,
      purchase.prodQuantity,
    ];
  });
  return tableData;
};

const ListPurchase = () => {
  const [purchaseList, setPurchaseList] = useState();
  const nav = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8081/api/purchase").then((resp) => {
      setPurchaseList(constructTableData(resp.data.allPurchase));
    });
  }, []);

  const editPurchase = (id) => {
    nav("/admin/createPurchase", { state: { purchaseId: id } });
  };

  const deletePurchase = (id) => {
    const tempPurchaseList = { ...purchaseList };
    delete tempPurchaseList[id];
    setPurchaseList(tempPurchaseList);
    axios.delete("http://localhost:8081/api/purchase/" + id).then((resp) => {
      alert("Purchase deleted successfully");
    });
  };

  if (purchaseList) {
    return (
      <div>
        <h2>Purchase List</h2>
        <NavButton
          label="Create purchase"
          path="/admin/createPurchase"
          variant="outlined"
        />
        &nbsp;
        <NavButton label="List product" path="/admin" variant="outlined" />
        <CrudTable
          headers={headers}
          tableData={purchaseList}
          editCallback={editPurchase}
          deleteCallback={deletePurchase}
        />
      </div>
    );
  } else {
    return (
      <div>
        <NavButton
          label="Create purchase"
          path="/admin/createPurchase"
          variant="outlined"
        />
        No purchase done yet
      </div>
    );
  }
};

export default ListPurchase;
