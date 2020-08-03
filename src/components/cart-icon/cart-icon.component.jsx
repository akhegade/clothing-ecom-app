import React from "react";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.action";

import {createStructuredSelector} from "reselect";
import {selectCartItemCount} from "../../redux/cart/cart.selectors";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

// import "./cart-icon.style.scss";
import {
  CartIconContainer,
  SpanItemCount
} from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <SpanItemCount >{itemCount}</SpanItemCount>
  </CartIconContainer>
);

const mapToStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapToStateToProps, mapDispatchToProps)(CartIcon);
