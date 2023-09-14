import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  Select,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./BuyNow.css";
import CustomModal from "../UI-Components/CustomModal";

const constructInvoiceJson = (prodList, buyerId, orderTotal) => {
  let invoiceJson = {};
  invoiceJson.invoice = {
    buyer: {
      buyerId: buyerId,
    },
    invoiceTotal: orderTotal,
  };
  invoiceJson.salesItems = [];
  for (let index = 0; index < prodList.length; index++) {
    let prod = prodList[index];
    let prodObj = {
      prodId: prod.prodId,
      prodQty: prod.quantity,
    };
    invoiceJson.salesItems.push(prodObj);
  }
  return invoiceJson;
};

const BuyNow = () => {
  const [prodList, setProdList] = useState([]);
  const [openItems, setOpenItems] = useState(true);
  const [openAddress, setOpenAddress] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const [itemsFlag, setItemsFlag] = useState(false);
  const [addressFlag, setAddressFlag] = useState(false);
  const [paymentFlag, setPaymentFlag] = useState(false);
  const [buyersList, setBuyersList] = useState([]);
  const [buyer, setBuyer] = useState([]);
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const loc = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    let tempProdList = loc.state.prodList;
    setProdList(tempProdList);
    let total = 0;
    tempProdList.forEach((prod) => {
      total += prod.prodPrice * prod.quantity;
      setOrderTotal(total);
    });
    axios.get("http://localhost:8081/api/buyer").then((resp) => {
      setBuyersList(resp.data.allBuyers);
      setBuyer(resp.data.allBuyers[0]);
    });
  }, []);
  useEffect(() => {
    let total = 0;
    prodList.forEach((prod) => {
      total += prod.prodPrice * prod.quantity;
      setOrderTotal(total);
    });
  }, [prodList]);
  const handleItemsClick = () => {
    if (!itemsFlag) {
      alert("Confirm items");
      return false;
    }
    setOpenItems(!openItems);
  };
  const handleAddressClick = () => {
    if (!itemsFlag || !addressFlag) {
      let message = !itemsFlag ? "Confirm items" : "Confirm address";
      alert(message);
      return false;
    }
    setOpenAddress(!openAddress);
  };
  const handlePaymentClick = () => {
    if (!itemsFlag || !addressFlag || !paymentFlag) {
      let message = !itemsFlag
        ? "Confirm items"
        : !addressFlag
        ? "Confirm address"
        : !paymentFlag
        ? "Confirm payment"
        : null;
      alert(message);
      return false;
    }
    setOpenPayment(!openPayment);
  };
  const handleConfirmItems = () => {
    setOpenItems(false);
    setOpenAddress(true);
    setItemsFlag(true);
  };
  const handleConfirmAddress = () => {
    setOpenAddress(false);
    setOpenPayment(true);
    setAddressFlag(true);
  };
  const handlePayment = () => {
    setOpenPayment(false);
    setPaymentFlag(true);
  };
  const quantityDropdown = (prodId, prodQty, selectedQty) => {
    let arr = Array.from({ length: prodQty }, (_, index) => index + 1);
    return (
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedQty}
        label="Qty"
        onChange={(eve) => handleProdQty(eve, prodId)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {arr.map((val) => (
          <MenuItem value={val}>{val}</MenuItem>
        ))}
      </Select>
    );
  };
  const handleProdQty = (eve, prodId) => {
    let tempProdList = [...prodList];
    let prodRecord = tempProdList.find((prod) => prod.prodId === prodId);
    prodRecord.quantity = eve.target.value;
    setProdList(tempProdList);
  };
  const saveInvoice = () => {
    debugger;
    if (!itemsFlag || !addressFlag || !paymentFlag) {
      alert("Confirm all the mandatory fields");
      return false;
    }
    let buyerId = buyer.buyerId;
    let data = constructInvoiceJson(prodList, buyerId, orderTotal);
    axios.post("http://localhost:8081/api/saveInvoice", data).then((resp) => {
      nav("/invoice/success");
    });
  };
  const handleManageAddress = (event) => {
    setOpenAddressModal(!openAddressModal);
    event.stopPropagation();
  };
  const closeModalCallback = () => {
    setOpenAddressModal(false);
  };
  const handleAddressSelect = (buyerId) => {
    debugger;
    let tempBuyerList = [...buyersList];
    let selectedBuyer = tempBuyerList.find((elem) => elem.buyerId === buyerId);
    setBuyer(selectedBuyer);
  };
  if (prodList && prodList.length > 0) {
    return (
      <div>
        <div className="h-div">
          <h3 className="h3-title">Checkout</h3>
        </div>
        <div className="b-div">
          <Accordion expanded={openItems} sx={{ width: "750px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              onClick={handleItemsClick}
            >
              <Typography>Items</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>

                {prodList.map((prod) => (
                  <tr>
                    <td>{prod.prodName}</td>
                    <td>
                      {quantityDropdown(
                        prod.prodId,
                        prod.prodQuantity,
                        prod.quantity
                      )}
                    </td>
                    <td>{prod.prodPrice}</td>
                  </tr>
                ))}
              </table>
              {!itemsFlag ? (
                <Button variant="outlined" onClick={handleConfirmItems}>
                  Confirm
                </Button>
              ) : null}
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion expanded={openAddress} sx={{ width: "750px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              onClick={handleAddressClick}
            >
              <Typography>Address & delivery</Typography>
              {openAddress ? (
                <Button
                  className="manage-add-btn"
                  onClick={(e) => handleManageAddress(e)}
                >
                  Manage Address
                </Button>
              ) : null}
            </AccordionSummary>
            <AccordionDetails>
              {buyer.buyerName} <br />
              {buyer.buyerAddress} <br />
              +91-{buyer.buyerPhone}
              <br />
              <br />
              {!addressFlag ? (
                <Button variant="outlined" onClick={handleConfirmAddress}>
                  Confirm
                </Button>
              ) : null}
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion expanded={openPayment} sx={{ width: "750px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              onClick={handlePaymentClick}
            >
              <Typography>Payment method</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="card"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Credit or debit card"
                  />
                  <FormControlLabel
                    value="netBanking"
                    control={<Radio />}
                    label="
                    Net Banking"
                  />
                  <FormControlLabel
                    value="upiApps"
                    control={<Radio />}
                    label="Other UPI Apps"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              <br />
              {!paymentFlag ? (
                <Button variant="outlined" onClick={handlePayment}>
                  Confirm
                </Button>
              ) : null}
            </AccordionDetails>
          </Accordion>
        </div>
        <div class="t-div-1">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <table>
                <tr>
                  <h5>Order Summary</h5>
                </tr>
                <tr>
                  <td>Items:</td>
                  <td>{orderTotal}</td>
                </tr>
                <tr>
                  <td>Delivery:</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <b>Order Total:</b>
                  </td>
                  <td>{orderTotal}</td>
                </tr>
              </table>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                sx={{ marginLeft: "44px" }}
                onClick={saveInvoice}
              >
                Proceed to dispatch
              </Button>
              <br />
              <br />
            </CardActions>
          </Card>
        </div>
        <CustomModal
          open={openAddressModal}
          header={
            <div>
              <Typography>
                <b>Address & delivery</b>
              </Typography>
            </div>
          }
          content={
            <div>
              {buyersList.map((buyer) => (
                <div className="buyer-list-cust">
                  <div className="buyer-details">
                    {buyer.buyerName}
                    <br />
                    {buyer.buyerPhone}
                    <br />
                    {buyer.buyerAddress}
                    <br />
                  </div>
                  <div className="close-modal-btn-cust">
                    <a onClick={() => handleAddressSelect(buyer.buyerId)}>
                      <Button>Select</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          }
          footer={<div></div>}
          closeModal={closeModalCallback}
        />
      </div>
    );
  }
};

export default BuyNow;
