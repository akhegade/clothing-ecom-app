import React from "react";
import {connect} from "react-redux";

import {
  addItem,
  removeItem,
  clearItemFromCart
} from "../../redux/cart/cart.action";

// import "./checkout-item.style.scss";
import {
  CheckOutItemContainer,
  ImageContainer,
  Image,
  NameSpan,
  PriceSpan,
  ValueSpan,
  QuantitySpan,
  Arrow,
  RemoveButton
} from "./checkout-item.styles";
const CheckOutItem = ({cartItem, addItem, removeItem, clearItemFromCart}) => {
  const {imageUrl, price, name, quantity} = cartItem;

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantitySpan>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <ValueSpan>{quantity}</ValueSpan>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantitySpan>
      <PriceSpan>{price}</PriceSpan>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10060;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: cartItem => dispatch(addItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
