import React, {useState, useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";
import CheckOutPage from "./pages/check-out/check-out.component";
import PageLoader from "./components/page-loader/page-loader.component";
import PasswordRest from "./components/password-reset/passwordReset.component";

import {checkUserSession} from "./redux/user/user.action";

import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments //for adding collection and documents into firestroe
} from "./firebase/firebase.utils";

// import {selectCollectionPrivew} from "./redux/shop/shop.selector";

import {loadingPageAtBeging} from "./utils";

// const EmailVerify = props => (
//   <div style={{color: "brown", textAlign: "center", padding: "10px"}}>
//    <span>X</span>
//     Please Verify Your Email Address
//     <button type="button">Verify</button>
//   </div>
// );

const App = ({currentUser, checkUserSession}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    loadingPageAtBeging().then(() => setLoading(false));
    checkUserSession();
  }, [checkUserSession]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route path="/rest-password/:email" component={PasswordRest} />
        <Route path="/rest-password/" component={PasswordRest} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionArray: selectCollectionPrivew
});

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
