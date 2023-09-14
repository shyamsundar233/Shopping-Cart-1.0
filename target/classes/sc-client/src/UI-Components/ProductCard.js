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
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  prodId,
  prodName,
  prodDesc,
  prodTags,
  prodPrice,
  prodImage,
  handleProdQty,
}) => {
  return (
    <MDBContainer fluid style={{ width: "100%", padding: "2px" }}>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard
            className="shadow-0 border-cust-1"
            style={{
              backgroundColor: "white",
              color: "black",
            }}
          >
            <MDBCardBody className="prod-card-1">
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0 pos-1">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={prodImage}
                      alt="Image"
                      fluid
                      className="w-100"
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
                <MDBCol md="6">
                  <Link to={`/detail/${prodId}`}>
                    <h5>{prodName}</h5>
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
                  <div className="mt-1 mb-0 text-muted small">
                    {prodTags
                      ? prodTags.map((tag, index) => (
                          <span>
                            <span style={{ color: "black" }}>{tag}</span>
                            {index !== prodTags.length - 1 &&
                            (index + 1) % 5 !== 0 ? (
                              <span
                                className="text-primary"
                                style={{ color: "black" }}
                              >
                                {" "}
                                •{" "}
                              </span>
                            ) : null}
                            {(index + 1) % 5 === 0 ? <br /> : null}
                          </span>
                        ))
                      : null}
                  </div>
                  <div>
                    <p className="text-truncate mb-4 mb-md-0">{prodDesc}</p>
                  </div>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">${prodPrice}</h4>&nbsp;
                    <span className="text-danger">
                      {prodPrice > 55 ? <s>${prodPrice - 54}</s> : null}
                    </span>
                  </div>
                  <h6 className="text-success-cust-1">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn
                      color="primary"
                      size="sm"
                      onClick={() => handleProdQty(prodId)}
                      style={{ backgroundColor: "#512B81" }}
                    >
                      Buy now
                    </MDBBtn>
                    <MDBBtn
                      outline
                      color="primary"
                      size="sm"
                      className="mt-2"
                      onClick={() => handleProdQty(prodId, true)}
                      style={{ color: "#512B81", borderColor: "#512B81" }}
                    >
                      Add to wish list
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

export default ProductCard;
