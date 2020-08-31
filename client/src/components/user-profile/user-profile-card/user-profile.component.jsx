import React from "react";

import "./user-propfile.style.scss";

const UserProfile = ({user: {displayName, email, emailVerified}, children}) => (
  <div className="user-profile">
    <span>{displayName.toUpperCase()}</span>
    <span className="">
      {email}

      {emailVerified ? (
        <span className="verfied">Verified</span>
      ) : (
        <span className="not-verified">
          <br />
          Please verify your email
        </span>
      )}
    </span>
    {children}
  </div>
);

export default UserProfile;
