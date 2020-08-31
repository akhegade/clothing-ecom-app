import React, {useState} from "react";
import {connect} from "react-redux";

import "./sign-up.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signUpStart} from "../../redux/user/user.action";
// import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

const SignUp = ({signUpStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passowrd don't match");
      return;
    }
    if (password.length < 6) {
      alert("password should be graterthan 6 character");
      return;
    }
    signUpStart({email, password, displayName});

    // try {
    //   const {user} = await auth.createUserWithEmailAndPassword(email, password);

    //   await createUserProfileDocument(user, {displayName});

    // this.setState({
    //   displayName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: ""
    // });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setUserCredentials({...userCredentials, [name]: value});
  };

  // render() {
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign upt with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label=" Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchtoProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchtoProps)(SignUp);
