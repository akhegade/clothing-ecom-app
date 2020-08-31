import React, {useState} from "react";

import "./passwordReset.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {forgotPassword} from "../../firebase/firebase.utils";

const PasswordRest = ({match}) => {
  const {email} = match.params;
  const [currentEmail, setEmail] = useState(email);

  const handleChange = event => {
    const {value} = event.target;
    setEmail(value);
  };

  const resetPassword = async event => {
    event.preventDefault();

    const emailAddress = currentEmail;
    forgotPassword(emailAddress);
  };

  return (
    <div className="reset-password">
      <form onSubmit={resetPassword} className="form-item">
        <FormInput
          type="email"
          name="email"
          value={currentEmail ? currentEmail : ""}
          handleChange={handleChange}
          label="Email"
          required
        />
        <CustomButton type="submit" style={{backgroundColor: "blue"}}>
          Continue{""}
        </CustomButton>
      </form>
    </div>
  );
};

export default PasswordRest;
