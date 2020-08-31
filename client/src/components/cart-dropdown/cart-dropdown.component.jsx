import React from "react";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.action";

import {withRouter} from "react-router";

import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import EmptyCart from "../error-components/cart-error.boundry/empty-cart.component";

// import "./cart-dropdown.style.scss";

import {
  CartDropdownContainer,
  CartItemsContainer
} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => {
  const goToCheckOutPage = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <>
          <CartItemsContainer>
            {cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </CartItemsContainer>
          <CustomButton onClick={goToCheckOutPage}>GO TO CHECKOUT</CustomButton>
        </>
      ) : (
        <EmptyCart />
      )}
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// const mapDispatchToProps = dispatch => ({
//   toggle: () => dispatch(toggleCartHidden())
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
