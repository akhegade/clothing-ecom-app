import React from "react";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";
import PasswordRest from "./components/password-reset/passwordReset.component";
import CustomButton from "./components/custom-button/custom-button.component";
import {
  auth,
  createUserProfileDocument,
  verifyEmail
} from "./firebase/firebase.utils";

// const EmailVerify = props => (
//   <div style={{color: "brown", textAlign: "center", padding: "10px"}}>
//    <span>X</span>
//     Please Verify Your Email Address
//     <button type="button">Verify</button>
//   </div>
// );

class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            emailVerified: auth.currentUser.emailVerified,
            ...snapShot.data()
          });
        });
        // console.log(auth.currentUser);
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
          <Route path="/rest-password/:email" component={PasswordRest} />
          <Route path="/rest-password/" component={PasswordRest} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
