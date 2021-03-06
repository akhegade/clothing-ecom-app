import React from "react";

import "./form-input.style.scss";

const FormInput = ({handleChange, label, children, ...otherProps}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        htmlFor=""
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    {otherProps.value ? children : null}
  </div>
);

export default FormInput;
