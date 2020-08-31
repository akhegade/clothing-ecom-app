import React from "react";

import "./sign-in-and-sing-up.style.scss";

import SingIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => {

  // const [isSignUp, setSignUp] = useState(false);
  // const signUp = () => {
  //   setSignUp(!isSignUp);
  // };

  return (
    <div className="sign-in-and-sign-up">
      {/* {isSignUp ? <SignUp /> : <SingIn isSignUp={isSignUp} signUp={signUp} />} */}
     <SingIn />
     <SignUp />

    </div>
  );
};

export default SignInAndSignUp;
