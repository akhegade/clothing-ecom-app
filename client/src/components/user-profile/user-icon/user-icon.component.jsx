import React from "react";

import {toggleUserProfile} from "../../../redux/user/user.action";

import "./user-icon.style.scss";

const UserIcon = ({user: {displayName}, toggleUserProfile}) => (
  <span className="user-name" onClick={() => toggleUserProfile()}>
    {displayName.substring(0, 2).toUpperCase()}
  </span>
);

export default UserIcon;
