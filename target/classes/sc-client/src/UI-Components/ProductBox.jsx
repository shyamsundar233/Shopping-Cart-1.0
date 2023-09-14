import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import "./ProductBox.css";

const ProductBox = ({ prodId, prodName, prodPrice, prodImage }) => {
  const nav = useNavigate();
  const redirectToDetail = () => {
    nav("/detail/" + prodId);
  };
  return (
    <MDBContainer
      fluid
      style={{
        width: "300px",
        height: "300px",
        padding: "2px",
        margin: "0px",
        overflow: "hidden",
      }}
    >
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard
            className="border-cust-1"
            style={{
              backgroundColor: "white",
              color: "black",
              height: "296px",
            }}
          >
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0 pos-1-detail">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={prodImage}
                      alt="Image"
                      fluid
                      className="w-100-prod-box"
                    />

                    <a href="#!">
                      <div
                        className="mask"
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6" style={{ width: "100%" }}>
                  <Link to={`/detail/${prodId}`}>
                    <b>{prodName}</b>
                  </Link>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>310</span>
                  </div>
                </MDBCol>
                <br />
                <br />
                <MDBCol md="6" lg="3">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1 prod-price-box-1">${prodPrice}</h4>
                    &nbsp;
                    <span className="text-danger prod-price-strike-box-1">
                      {prodPrice > 55 ? <s>${prodPrice - 54}</s> : null}
                    </span>
                  </div>
                  <div className="d-flex flex-column">
                    <MDBBtn
                      color="primary"
                      size="sm"
                      onClick={() => redirectToDetail()}
                      style={{
                        backgroundColor: "#512B81",
                        width: "95px",
                        position: "absolute",
                        top: "228px",
                        left: "30px",
                      }}
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
                        width: "95px",
                        position: "absolute",
                        top: "220px",
                        right: "33px",
                      }}
                    >
                      Wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ProductBox;
