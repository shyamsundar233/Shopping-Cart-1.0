import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ItemDetailView.css";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import ProductBox from "../UI-Components/ProductBox";

let quantityList = [];

const ItemDetailView = () => {
  const nav = useNavigate();
  const { itemId } = useParams();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemTags, setItemTags] = useState([]);
  const [itemImage, setItemImage] = useState("");
  const [prodList, setProdList] = useState([]);
  const [selectedQty, setSelectedQty] = useState(1);
  const constructQuantityDropdown = (itemQty) => {
    quantityList = [];
    for (let itr = 0; itr < itemQty; itr++) {
      quantityList.push(<option value={itr + 1}>{itr + 1}</option>);
    }
  };
  const prodListJson = () => {
    let prodRecord = {
      prodId: itemId,
      prodName: itemName,
      prodDesc: itemDesc,
      prodTags: itemTags,
      prodImage: itemImage,
      prodPrice: itemPrice,
      prodQuantity: itemQuantity,
      quantity: selectedQty,
    };
    let arr = [];
    arr.push(prodRecord);
    return arr;
  };
  const handleBuyNow = () => {
    let prodIdJson = prodListJson();
    nav("/buyNow", { state: { prodList: prodIdJson } });
  };
  useEffect(() => {
    axios.post("http://localhost:8081/api/items/" + itemId).then((resp) => {
      let itemDetails = resp.data.item;
      setItemName(itemDetails.prodName);
      setItemPrice(itemDetails.prodPrice);
      setItemQuantity(itemDetails.prodQuantity);
      setItemDesc(itemDetails.prodDesc);
      setItemTags(itemDetails.prodTags);
      setItemImage(itemDetails.prodImage);
      setSelectedQty(1);
      constructQuantityDropdown(itemDetails.prodQuantity);
    });
    axios.get("http://localhost:8081/api/recentItems").then((resp) => {
      setProdList(resp.data);
    });
  }, [itemId]);
  return (
    <div>
      <div className="detail-view-whole">
        <div>
          <img alt="Error" className="prod-img-1-detail" src={itemImage} />
        </div>
        <div className="item-name">
          <h4>
            <b>{itemName}</b>
          </h4>
          <div className="d-flex flex-row">
            <div className="text-danger mb-1 me-2">
              <MDBIcon fas icon="star" className="res-1" />
              <MDBIcon fas icon="star" className="res-1" />
              <MDBIcon fas icon="star" className="res-1" />
              <MDBIcon fas icon="star" className="res-1" />
            </div>
            <span>310</span>
          </div>
          <br />
          <div className="mt-1 mb-0 text-muted small">
            {itemTags
              ? itemTags.map((tag, index) => (
                  <span>
                    <span style={{ color: "black" }}>&nbsp;{tag}&nbsp;</span>
                    {index !== itemTags.length - 1 && (index + 1) % 3 !== 0 ? (
                      <span className="text-primary" style={{ color: "black" }}>
                        {" "}
                        •{" "}
                      </span>
                    ) : null}
                    {(index + 1) % 3 === 0 ? <br /> : null}
                  </span>
                ))
              : null}
          </div>
        </div>
        <br />
        <br />
        <div className="desc-item-detail-1">
          <b style={{ fontWeight: "500", fontSize: "1.2em" }}>
            Product Description:
          </b>
          <br /> {itemDesc}
        </div>
        <div className="right-box-border">
          <div className="item-price-detail">${itemPrice}</div>
          <div className="disc-price-detail">${itemPrice - 120}</div>
          <div className="item-qty-detail-1">
            Qty:&nbsp;&nbsp;&nbsp;&nbsp;
            <select
              value={selectedQty}
              style={{ width: "50px" }}
              onChange={(e) => setSelectedQty(e.target.value)}
            >
              {quantityList}
            </select>
          </div>
          <div className="delivery-stat-1">Free Delivery</div>
          <br />
          <div className="delivery-date-1">Tomorrow, 13 August</div>
          <div className="buy-now-btn-1">
            <MDBBtn
              color="primary"
              size="sm"
              style={{ backgroundColor: "#512B81", width: "100%" }}
              onClick={handleBuyNow}
            >
              Buy now
            </MDBBtn>
            <MDBBtn
              outline
              color="primary"
              size="sm"
              className="mt-2"
              style={{
                color: "#512B81",
                borderColor: "#512B81",
                width: "100%",
              }}
            >
              Add to wish list
            </MDBBtn>
          </div>
        </div>
        <div className="prod-box-detail-1">
          {prodList.map((prod, index) => (
            <div style={{ margin: 0, display: "flex" }}>
              <ProductBox
                prodId={prod.prodId}
                prodName={prod.prodName}
                prodPrice={prod.prodPrice}
                prodImage={prod.prodImage}
              ></ProductBox>
              &nbsp;&nbsp;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailView;
