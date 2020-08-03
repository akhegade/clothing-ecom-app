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
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import UserIcon from "../user-profile/user-icon/user-icon.component";
import UserProfile from "../user-profile/user-profile-card/user-profile.component";
import CustomButton from "../custom-button/custom-button.component";
import {ReactComponent as Logo} from "../../assets/crown.svg";

// import "./header.style.scss";
import {
  HeaderContainer,
  LogoConatainer,
  OptionContainer,
  OptionLink,
  OptionDiv
} from "./header.styles.jsx";
const Header = ({currentUser, hidden, showUserProfile, dispatch, history}) => {
  return (
    <HeaderContainer>
      <LogoConatainer to="/">
        <Logo className="logo" />
      </LogoConatainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? null : <OptionLink to="/signin"> SIGN IN</OptionLink>}
        <OptionLink as={"div"}>
          <CartIcon />
          {hidden ? null : <CartDropdown />}
        </OptionLink>
        {currentUser ? (
          <OptionLink as={"div"}>
            <UserIcon user={currentUser} dispatch={dispatch} />
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
                  <OptionLink to="/signin"> SIGN IN</OptionLink>
                )}
              </UserProfile>
            ) : null}
          </OptionLink>
        ) : null}
      </OptionContainer>
    </HeaderContainer>
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
