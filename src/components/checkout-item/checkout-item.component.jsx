import React from "react";
import {connect} from "react-redux";

import {
  addItem,
  removeItem,
  clearItemFromCart
} from "../../redux/cart/cart.action";

import "./checkout-item.style.scss";

const CheckOutItem = ({cartItem, addItem, removeItem, clearItemFromCart}) => {
  const {id, imageUrl, price, name, quantity} = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} srcSet={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10060;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: cartItem => dispatch(addItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
