import React from "react";
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

import PasswordRest from "./components/password-reset/passwordReset.component";
import CustomButton from "./components/custom-button/custom-button.component";
import {
  auth,
  createUserProfileDocument,
  verifyEmail
} from "./firebase/firebase.utils";

import {loadingPageAtBeging} from "./utils";

import {ReactComponent as Logo} from "./assets/crown.svg";
import PageLoader from "./components/page-loader/page-loader.component";

// const EmailVerify = props => (
//   <div style={{color: "brown", textAlign: "center", padding: "10px"}}>
//    <span>X</span>
//     Please Verify Your Email Address
//     <button type="button">Verify</button>
//   </div>
// );

class App extends React.Component {
  state = {
    loading: true
  };

  unsubcribeFromAuth = null;

  componentDidMount() {
    loadingPageAtBeging().then(() => this.setState({loading: false}));

    const {setCurrentUser} = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log("userAuth in AppComponent ", userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log("snapshot data ", snapShot.data());

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
    console.log("app component did mount");
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    const {loading} = this.state;
    if (loading) {
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
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route path="/rest-password/:email" component={PasswordRest} />
          <Route path="/rest-password/" component={PasswordRest} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
