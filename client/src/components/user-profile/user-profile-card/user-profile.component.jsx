import React from "react";

import UserIcon from "../user-icon/user-icon.component";
import "./user-propfile.style.scss";

const UserProfile = ({user, children}) => {
  const {displayName, email, emailVerified} = user;
  return (
    <div className="user-profile">
      <div className="user-details">
        <UserIcon user={user} />
        <div className="user-info">
          <span>{displayName.toUpperCase()}</span>
          <span className="email">
            {email}

            {emailVerified ? (
              <span className="verfied">Verified</span>
            ) : (
              <span className="not-verified">Please verify your email</span>
            )}
          </span>
        </div>
      </div>
      <hr />
      {children}
    </div>
  );
};

export default UserProfile;
