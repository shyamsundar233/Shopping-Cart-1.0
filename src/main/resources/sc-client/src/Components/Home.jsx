import React from "react";
import ItemFilter from "./ItemFilter";
import ViewProduct from "./ViewProduct";

const Home = () => {
  let filters = [
    {
      header: "Delivery Day",
      options: [
        { type: "checkbox", name: "Get It Today" },
        { type: "checkbox", name: "Get It by Tomorrow" },
        { type: "checkbox", name: "Get It in 2 Days" },
      ],
    },
    {
      header: "Category",
      options: [
        { type: "link", name: "Audio Headphones" },
        { type: "link", name: "In-Ear Headphones" },
        { type: "link", name: "PC Gaming Peripherals" },
        { type: "link", name: "PC Game Headsets" },
        { type: "link", name: "Mobiles & Accessories" },
        { type: "link", name: "Mobile Accessories" },
      ],
    },
    {
      header: "Customer Review",
      options: [
        { type: "rating", name: "& up" },
        { type: "rating", name: "& up" },
        { type: "rating", name: "& up" },
        { type: "rating", name: "& up" },
        { type: "rating", name: "& up" },
        { type: "rating", name: "& up" },
      ],
    },
  ];
  return (
    <div>
      <ItemFilter filters={filters} />
      <ViewProduct />
    </div>
  );
};

export default Home;
