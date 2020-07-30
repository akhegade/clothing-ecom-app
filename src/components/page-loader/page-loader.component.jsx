import React from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg";

import "./page-loader.style.scss";

const PageLoader = () => (
  <div className="loading-container">
    <div className="icon">
      <Logo />
    </div>
    <div className="page-loader"></div>
  </div>
);

export default PageLoader;
