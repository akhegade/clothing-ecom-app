import React, {useState} from "react";
import {connect} from "react-redux";

import {Link} from "react-router-dom";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import {signInWithGoogle} from "../../firebase/firebase.utils";
import {
  googleSingInStart,
  emailSingInStart
} from "../../redux/user/user.action";

import {auth} from "../../firebase/firebase.utils";

const SignIn = ({emailSingInStart, googleSingInStart}) => {
  const [userCredentials, setCredentials] = useState({email: "", password: ""});
  const [isPasswordHidden, setPasswordHide] = useState(true);

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...userCredentials, [name]: value});
  };

  // password Reset method

  const resetPassword = async () => {
    const emailAddress = email;
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function() {
        alert("Check your email");
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  // login from firbase using signInWithEmailAndPassword
  const {email, password} = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

    emailSingInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({email: "", password: ""});
    // } catch (error) {
    //   console.log(error);
    // }
  };

  //const {email,password} = userCredentials;
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type={isPasswordHidden ? "password" : "text"}
          name="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        >
          <button
            type="button"
            onClick={() => setPasswordHide(!isPasswordHidden)}
          >
            {isPasswordHidden ? "Show" : "Hide"}
          </button>

          <Link
            to={`rest-password/${email}`}
            className="restPassword"
            // onClick={this.resetPassword}
          >
            Forgot Password
          </Link>
        </FormInput>

        {/* <span
            className="restPassword"
            onClick={this.resetPassword}
          >
            Forgot Password
          </span> */}

        <div className="buttons">
          <CustomButton type="submit">Sign In </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSingInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
      {/* <span onClick={this.props.signUp}>I don't have account</span> */}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSingInStart: () => dispatch(googleSingInStart()),
  emailSingInStart: (email, password) =>
    dispatch(emailSingInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
