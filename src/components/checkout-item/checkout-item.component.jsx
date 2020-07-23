import React from "react";

import "./checkout-item.style.scss";

const CheckOutItem = ({cartItem: {imageUrl, price, name, quantity}}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" srcset="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10060;</div>
    </div>
  );
};
export default CheckOutItem;
