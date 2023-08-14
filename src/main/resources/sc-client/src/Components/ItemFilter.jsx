import React from "react";
import "./ItemFilter.css";

const ratingStars = [
  <span class="fa fa-star" />,
  <span class="fa fa-star" />,
  <span class="fa fa-star" />,
  <span class="fa fa-star" />,
  <span class="fa fa-star" />,
];

const ItemFilter = ({ filters }) => {
  if (filters && filters.length > 0) {
    return (
      <div
        style={{
          float: "left",
          width: "20%",
          padding: "10px",
          backgroundColor: "#D8D9DA",
          position: "fixed",
          height: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            height: "92%",
          }}
        >
          {filters.map((filter, index) => (
            <div>
              <b>{filter.header}</b>
              <br />
              {filter.options.map((option, index) => (
                <div>
                  {option.type === "checkbox" ? (
                    <div>
                      <input type="checkbox" />
                      &nbsp;&nbsp;{option.name}
                    </div>
                  ) : null}
                  {option.type === "rating" ? (
                    <a href="#">
                      {ratingStars}&nbsp;&nbsp;
                      {option.name}
                    </a>
                  ) : null}
                  {option.type === "link" ? (
                    <a href="#">{option.name}</a>
                  ) : null}
                </div>
              ))}
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ItemFilter;
