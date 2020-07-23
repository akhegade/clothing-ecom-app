import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";


import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import "./check-out.style.scss";

const CheckOutPage = ({cartItems, total}) => (
  // <div className="check-out-items">
  //   {cartItems.map(cartItem => (
  //     <CartItem key={cartItem.id} item={cartItem} />
  //   ))}
  // </div>

  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Qyantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: &#x20B9;{total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
