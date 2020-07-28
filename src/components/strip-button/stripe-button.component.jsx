import React from "react";
import StripeCheckout from "react-stripe-checkout";
import log from "../../assets/crown.svg";

const StripeCheckoutButton = ({price}) => {
  const cents = price * 100;
  const publishableKey =
    "pk_test_51H9lZjJC6akF8wzFa3zUPq5tvwk45rgHoxYeoXkCJwD5f9xnkveLlPmhtlqy7yw5gVOw96FeWIWYLUI8L4eAQjO100sQjUXZZA";

  const onTOken = token => {
    console.log(token);
    alert("Payment Sucessfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Your Fash Pvt Ltd."
      billingAddress
      shippingAddress
      image={log}
      description={`Your total is INR${price}`}
      amount={cents}
      currency="INR"
      panelLabel="Pay Now"
      token={onTOken}
      locale="Hindi"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
