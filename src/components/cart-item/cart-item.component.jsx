import React from "react";

// import "./cart-item.style.scss";
import {
  CartItemContainer,
  Image,
  ItemDetailContainer,
  NameSpan,
  PriceSpan
} from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
  return (
    <CartItemContainer>
      <Image src={`../${imageUrl}`} alt={name} />
      <ItemDetailContainer>
        <NameSpan className="name">{name} </NameSpan>
        <PriceSpan className="price">
          {quantity}X &#x20B9;{price}
        </PriceSpan>
      </ItemDetailContainer>
    </CartItemContainer>
  );
};

export default CartItem;
