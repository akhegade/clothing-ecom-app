import React from "react";

import "./sign-in-and-sing-up.style.scss";

import SingIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SingIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
