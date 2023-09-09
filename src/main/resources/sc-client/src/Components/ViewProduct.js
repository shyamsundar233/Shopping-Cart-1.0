import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../UI-Components/ProductCard";
import NavButton from "../UI-Components/NavButton";
import { useNavigate } from "react-router-dom";
import { Modal, Backdrop, Fade, Box, Typography, Button } from "@mui/material";
import "./ViewProduct.css";

const prodListJson = (prodId, prodQty, prodList) => {
  let prodRecord = prodList.find((prod) => prod.prodId === prodId);
  prodRecord.quantity = prodQty;
  let arr = [];
  arr.push(prodRecord);
  return arr;
};
const style = {
  position: "absolute",
  top: "100px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "white",
  border: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

let quantityList = [];

const ViewProduct = (props) => {
  const [prodList, setProdList] = useState(props.prodList);
  const [openModal, setOpenModal] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8081/api/items").then((resp) => {
      if (typeof resp.data !== "string") {
        setProdList(resp.data);
      }
    });
  }, []);
  const handleProdQty = (prodId, addToWishList) => {
    setOpenModal(true);
    let prodQty = prodList.find((prod) => prod.prodId === prodId).prodQuantity;
    quantityList = [];
    for (let itr = 0; itr < prodQty; itr++) {
      quantityList.push(
        <Button
          variant="contained"
          sx={{ margin: "5px" }}
          onClick={(e) =>
            buyNowCallback(prodId, itr + 1, prodList, addToWishList)
          }
        >
          {itr + 1}
        </Button>
      );
    }
  };
  const buyNowCallback = (prodId, prodQty, prodList, addToWishList) => {
    if (addToWishList) {
      let data = {
        product: {
          prodId: prodId,
        },
        itemQty: prodQty,
      };
      axios.post("http://localhost:8081/api/cart", data).then((resp) => {
        console.log(resp);
        nav("/cart");
      });
    } else {
      let prodIdJson = prodListJson(prodId, prodQty, prodList);
      debugger;
      nav("/buyNow", { state: { prodList: prodIdJson } });
    }
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  if (prodList && prodList.length > 0) {
    return (
      <div
        style={{
          float: "right",
          width: "80%",
          backgroundColor: "#D8D9DA",
          padding: "10px",
        }}
      >
        <div>
          {prodList.map((prod, index) => (
            <ProductCard
              prodId={prod.prodId}
              prodName={prod.prodName}
              prodPrice={prod.prodPrice}
              prodDesc={prod.prodDesc}
              prodTags={prod.prodTags}
              prodImage={prod.prodImage}
              handleProdQty={handleProdQty}
            ></ProductCard>
          ))}
        </div>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openModal}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Select quantity
                </Typography>
                {quantityList}
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        No items found
        <br />
        <br />
        <NavButton label="Admin" path="/admin" variant="outlined" />
      </div>
    );
  }
};

export default ViewProduct;
