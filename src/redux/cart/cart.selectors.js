import {createSelector} from "reselect";

//input selectors
//which will return a pice of state from reducer
const selectCart = state => state.cart;

const selectUser = state => state.user;

//output seletors
//which will take input selectors as input,modified it and return it back
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatorQuantity, cartItem) =>
        accumulatorQuantity + cartItem.quantity,
      0
    )
);