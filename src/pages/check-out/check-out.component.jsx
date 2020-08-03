import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import EmptyCart from "../../components/error-components/cart-error.boundry/empty-cart.component";

import StripeCheckoutButton from "../../components/strip-button/stripe-button.component";

import "./check-out.style.scss";

const CheckOutPage = ({cartItems, total}) => {
  // <div className="check-out-items">
  //   {cartItems.map(cartItem => (
  //     <CartItem key={cartItem.id} item={cartItem} />
  //   ))}
  // </div>

  return (
    <div className="checkout-page">
      {cartItems.length ? (
        <>
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
          <div className="test-warning">
            *Please use the following test credidt card for payments*
            <br />
            4242-4242-4242-4242 Exp: 01/20 - CVV: 123
          </div>
          {/* <StripeCheckoutButton price={total} /> */}
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
