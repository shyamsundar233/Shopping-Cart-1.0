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

const constructInvoiceJson = (prodList, orderTotal) => {
  let invoiceJson = {};
  invoiceJson.invoice = {
    buyer: {
      buyerId: 1,
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
    if (!itemsFlag || !addressFlag || !paymentFlag) {
      alert("Confirm all the mandatory fields");
      return false;
    }
    let data = constructInvoiceJson(prodList, orderTotal);
    axios.post("http://localhost:8081/api/saveInvoice", data).then((resp) => {
      nav("/invoice/success");
    });
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
            </AccordionSummary>
            <AccordionDetails>
              Shyam sundar <br />
              No.3, Flat B1, Mirra Apartments 3 Hostel Street,
              <br />
              Urapakkam <br />
              Urapakkam <br />
              CHENNAI, TAMIL NADU 603210 <br />
              +91-6374412583
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
      </div>
    );
  }
};

export default BuyNow;
