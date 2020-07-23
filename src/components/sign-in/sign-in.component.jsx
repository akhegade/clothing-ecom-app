import React from "react";

import {Link} from "react-router-dom";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utils";

import {auth} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  // password Reset method
  resetPassword = async () => {
    const emailAddress = this.state.email;
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
  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: "", password: ""});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          >
            <Link
              to={`rest-password/${this.state.email}`}
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
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
        {/* <span onClick={this.props.signUp}>I don't have account</span> */}
      </div>
    );
  }
}
export default SignIn;
