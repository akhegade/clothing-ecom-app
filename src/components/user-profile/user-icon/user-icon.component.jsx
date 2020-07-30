import React from "react";

import {toggleUserProfile} from "../../../redux/user/user.action";

import "./user-icon.style.scss";

const UserIcon = ({user: {displayName}, dispatch}) => (
  <span className="user-name" onClick={() => dispatch(toggleUserProfile())}>
    {displayName.substring(0, 2).toUpperCase()}
  </span>
);

export default UserIcon;
