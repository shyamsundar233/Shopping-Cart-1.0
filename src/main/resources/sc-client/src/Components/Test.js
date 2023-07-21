import React, { useState } from "react";

const Test = () => {
  const [prodImage, setProdImage] = useState();

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

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <img src={prodImage} alt="image" />
    </div>
  );
};

export default Test;
