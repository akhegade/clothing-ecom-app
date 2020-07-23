import React from "react";
import {Link,NavLink} from "react-router-dom";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdowm.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";

import "./header.style.scss";

const Header = ({currentUser, hidden}) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className="option" to="/signin">
            {" "}
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

//with  createStructuredSelector from reselect library;
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
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

export default connect(mapStateToProps)(Header);
