import React from "react";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.action";

import {createStructuredSelector} from "reselect";
import {selectCartItemCount} from "../../redux/cart/cart.selectors";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapToStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapToStateToProps, mapDispatchToProps)(CartIcon);
