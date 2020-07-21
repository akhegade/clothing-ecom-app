import React from "react";

import "./cart-item.style.scss";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-detail">
        <span className="name">{name} </span>
        <span className="price">
          {quantity} X &#x20B9;{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
