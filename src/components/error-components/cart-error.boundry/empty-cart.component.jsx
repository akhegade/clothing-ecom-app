import React from "react";

import {EmptyBoxContainer, EmptyMessage} from "./empty-cart.syles";
const EmptyCart = () => (
  <EmptyBoxContainer>
    <img src="images/empty-box/icons8-empty-box-64.png" alt="empty-logo" />
    <EmptyMessage className="empty-message">Your cart is empty</EmptyMessage>
  </EmptyBoxContainer>
);

export default EmptyCart;
