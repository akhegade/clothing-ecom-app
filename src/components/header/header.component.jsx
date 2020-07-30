import React from "react";
import {Link, NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectUserProfile} from "../../redux/user/user.selector";

import {toggleUserProfile} from "../../redux/user/user.action";

import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdowm.component";
import UserIcon from "../user-profile/user-icon/user-icon.component";
import UserProfile from "../user-profile/user-profile-card/user-profile.component";
import CustomButton from "../custom-button/custom-button.component";
import {ReactComponent as Logo} from "../../assets/crown.svg";

import "./header.style.scss";

const Header = ({currentUser, hidden, showUserProfile, dispatch, history}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/contact">
          CONTACT
        </NavLink>
        {currentUser ? null : (
          <NavLink className="option" to="/signin">
            {" "}
            SIGN IN
          </NavLink>
        )}

        <CartIcon />
        {currentUser ? (
          <UserIcon user={currentUser} dispatch={dispatch} />
        ) : null}

        {hidden ? null : <CartDropdown />}
      </div>
      {/* {hidden ? null : <CartDropdown />} */}
      {showUserProfile ? (
        <UserProfile user={currentUser}>
          {currentUser ? (
            <CustomButton
              onClick={() => {
                dispatch(toggleUserProfile());
                auth.signOut();
                history.push("/signin");
              }}
            >
              SIGN OUT
            </CustomButton>
          ) : (
            <NavLink className="option" to="/signin">
              {" "}
              SIGN IN
            </NavLink>
          )}
        </UserProfile>
      ) : null}
    </div>
  );
};

//with  createStructuredSelector from reselect library;
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showUserProfile: selectUserProfile,
  hidden: selectCartHidden
});

//without using createStacturedSelector
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

//advance way detructuring objects
// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
//   currentUser,
//   hidden
// });

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden
// });

// const mapDispatchToProps = Dis

export default withRouter(connect(mapStateToProps)(Header));
