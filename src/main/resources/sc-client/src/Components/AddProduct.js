import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import NavButton from "../UI-Components/NavButton";
import TagsInput from "react-tagsinput";
import "./AddProduct.css";

const AddProduct = (props) => {
  const [prodId, setProdId] = useState();
  const [prodName, setProdName] = useState(props.prodName);
  const [prodDesc, setProdDesc] = useState(props.prodDesc);
  const [prodTags, setProdTags] = useState(props.prodTags);
  const [prodImage, setProdImage] = useState(props.prodImage);
  const [operation, setOperation] = useState("create");
  const nav = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    if (loc.state && loc.state.prodId) {
      setOperation("edit");
      let id = loc.state.prodId;
      setProdId(loc.state.prodId);
      axios.post("http://localhost:8081/api/product/" + id).then((resp) => {
        console.log(resp);
        let product = resp.data.product;
        setProdName(product.prodName);
        setProdDesc(product.prodDesc);
        setProdTags(product.prodTags);
        setProdImage(product.prodImage);
      });
    }
  }, []);
  const createProduct = (saveAndNew) => {
    if (operation === "create") {
      let data = {
        prodName: prodName,
        prodDesc: prodDesc,
        prodTags: prodTags,
        prodImage: prodImage,
      };
      axios.post("http://localhost:8081/api/product", data).then((resp) => {
        saveAndNew === true ? nav("/admin/create") : nav("/admin");
      });
    } else if (operation === "edit") {
      let data = {
        prodId: prodId,
        prodName: prodName,
        prodDesc: prodDesc,
        prodTags: prodTags,
        prodImage: prodImage,
      };
      axios.post("http://localhost:8081/api/product", data).then((resp) => {
        saveAndNew === true ? nav("/admin/create") : nav("/admin");
      });
    }
    if (saveAndNew === true) {
      resetComponent();
    }
  };

  const addTags = (tags) => {
    setProdTags(tags);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProdImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetComponent = () => {
    setProdId("");
    setProdName("");
    setOperation("create");
  };

  return (
    <div>
      <Container fixed maxWidth="sm" class="center">
        <h3>Create product now </h3>&nbsp;
        <TextField
          id="standard-basic"
          label="Product name"
          variant="standard"
          onChange={(e) => setProdName(e.target.value)}
          value={prodName}
        />
        <br />
        <br />
        <TextField
          id="standard-multiline-flexible"
          label="Product description"
          multiline
          maxRows={4}
          style={{ width: "100%" }}
          onChange={(e) => setProdDesc(e.target.value)}
          value={prodDesc}
          variant="standard"
        />
        <br />
        <br />
        <br />
        <TagsInput value={prodTags ? prodTags : []} onChange={addTags} />
        <br />
        <br />
        <br />
        <input type="file" onChange={handleImageChange} />
        <img src={prodImage} alt="image" />
        <br />
        <br />
        <br />
        <Button onClick={createProduct} variant="contained">
          Create
        </Button>
        &nbsp;
        <Button onClick={() => createProduct(true)} variant="contained">
          Create and new
        </Button>
        &nbsp;
        <NavButton label="Cancel" path="/admin" variant="outlined" />
      </Container>
    </div>
  );
};

export default AddProduct;
