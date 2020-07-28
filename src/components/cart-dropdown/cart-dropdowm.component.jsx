import React from "react";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.action";

import {withRouter} from "react-router";

import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdowm.style.scss";

const CartDropdown = ({cartItems, history, dispatch}) => {
 
 
  const goToCheckOutPage = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
          <CustomButton onClick={goToCheckOutPage}>GO TO CHECKOUT</CustomButton>
        </>
      ) : (
        <div className="empty-box">
          <img src="images/empty-box/icons8-empty-box-64.png" />
          <span className="empty-message">Your cart is empty</span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// const mapDispatchToProps = dispatch => ({
//   toggle: () => dispatch(toggleCartHidden())
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
