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

// import "./check-out.style.scss";
import {
  ChecoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHederBlock,
  TotalDiv,
  TestDataDiv,
  ColumnName,
  EmptyDivConatainer
} from "./check-out-styles.jsx";

const CheckOutPage = ({cartItems, total}) => {
  // <div className="check-out-items">
  //   {cartItems.map(cartItem => (
  //     <CartItem key={cartItem.id} item={cartItem} />
  //   ))}
  // </div>

  return(
    <ChecoutPageContainer>
      {cartItems.length ? (
        <>
        <CheckoutHeaderContainer>
         <CheckoutHederBlock>
           <ColumnName>Product</ColumnName>
         </CheckoutHederBlock>
         <CheckoutHederBlock>
           <ColumnName>Description</ColumnName>
         </CheckoutHederBlock>
         <CheckoutHederBlock>
           <ColumnName>Qyantity</ColumnName>
         </CheckoutHederBlock>
         <CheckoutHederBlock>
          <ColumnName>Price</ColumnName>
         </CheckoutHederBlock>
         <CheckoutHederBlock>
           <ColumnName>Remove</ColumnName>
         </CheckoutHederBlock>
      </CheckoutHeaderContainer>
       {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
       ))}
       <TotalDiv>
         <ColumnName>TOTAL: &#x20B9;{total}</ColumnName>
       </TotalDiv>
       <TestDataDiv>
         *Please use the following test credidt card for payments*
         <br />
         4242-4242-4242-4242 Exp: 01/20 - CVV: 123
       </TestDataDiv>
      <StripeCheckoutButton price={total} />
      </>
  ) : (
    <EmptyDivConatainer />
  )
}
    </ChecoutPageContainer>
)
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
