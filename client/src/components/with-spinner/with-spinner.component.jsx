import React from "react";
import "./with-spinner.style.scss";

const WithSpinner = WrappedComponent => {
  const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <div className="loader"></div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
