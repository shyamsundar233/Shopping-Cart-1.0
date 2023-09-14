import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddProduct.css";
import { TextField, Button, Container, Select, MenuItem } from "@mui/material";
import NavButton from "../UI-Components/NavButton";

const AddPurchase = (props) => {
  const [prodList, setProdList] = useState();
  const [prodId, setProdId] = useState(props.prodId);
  const [prodPrice, setProdPrice] = useState(props.prodPrice);
  const [prodQuantity, setProdQuantity] = useState(props.prodQuantity);
  const [operation, setOperation] = useState("create");
  const nav = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    if (loc && loc.state && loc.state.purchaseId) {
      setOperation("edit");
      axios
        .post("http://localhost:8081/api/purchase/" + loc.state.purchaseId)
        .then((resp) => {
          setProdId(resp.data.purchase.product.prodId);
          setProdPrice(resp.data.purchase.prodPrice);
          setProdQuantity(resp.data.purchase.prodQuantity);
          axios.get("http://localhost:8081/api/product").then((resp) => {
            setProdList(resp.data.allProducts);
          });
        });
    } else {
      axios.get("http://localhost:8081/api/product").then((resp) => {
        setProdList(resp.data.allProducts);
        let x = !prodId ? setProdId(resp.data.allProducts[0].prodId) : null;
      });
    }
  }, []);

  const createPurchase = (saveAndNew) => {
    let data = {
      prodId: prodId,
      prodPrice: prodPrice,
      operation: operation,
      prodQuantity: prodQuantity,
    };
    if (operation === "create") {
      axios.post("http://localhost:8081/api/purchase", data).then((resp) => {
        console.log(resp);
      });
    } else if (operation === "edit") {
      data.purchaseId = loc.state.purchaseId;
      axios.post("http://localhost:8081/api/purchase", data).then((resp) => {
        console.log(resp);
      });
    }
    resetComponent();
    saveAndNew === true
      ? nav("/admin/createPurchase")
      : nav("/admin/listPurchase");
  };

  const resetComponent = () => {
    setProdPrice("");
    setProdId(prodList[0].prodId);
    setOperation("create");
  };

  if (prodList) {
    return (
      <div>
        <Container fixed maxWidth="sm" class="center">
          <h3>Create purchase</h3>&nbsp;
          <br />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={prodId}
            label="Product"
            onChange={(e) => setProdId(e.target.value)}
          >
            {prodList.map((prod) => (
              <MenuItem value={prod.prodId}>{prod.prodName}</MenuItem>
            ))}
          </Select>
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Product price"
            variant="standard"
            onChange={(e) => setProdPrice(e.target.value)}
            value={prodPrice}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Product quantity"
            variant="standard"
            onChange={(e) => setProdQuantity(e.target.value)}
            value={prodQuantity}
          />
          <br />
          <br />
          <br />
          <Button onClick={createPurchase} variant="contained">
            Create
          </Button>
          &nbsp;
          <Button onClick={() => createPurchase(true)} variant="contained">
            Create and new
          </Button>
          &nbsp;
          <NavButton
            label="Cancel"
            path="/admin/listPurchase"
            variant="outlined"
          />
        </Container>
      </div>
    );
  } else {
    return <div>No products found</div>;
  }
};

export default AddPurchase;
