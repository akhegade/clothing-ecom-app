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
import PageLoader from "./components/page-loader/page-loader.component";
import PasswordRest from "./components/password-reset/passwordReset.component";

import {checkUserSession} from "./redux/user/user.action";

import {
  auth,
  createUserProfileDocument
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

class App extends React.Component {
  state = {
    loading: true
  };

  unsubcribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser, checkUserSession} = this.props;

    loadingPageAtBeging().then(() => this.setState({loading: false}));

    checkUserSession();
    // this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   // console.log("userAuth",userAuth);

    //   if (userAuth) {
    //     try {
    //       const userRef = await createUserProfileDocument(userAuth);
    //       // console.log("userRef",userRef);
    //       userRef.onSnapshot(snapShot => {
    //         setCurrentUser({
    //           id: snapShot.id,
    //           emailVerified: auth.currentUser.emailVerified,
    //           ...snapShot.data()
    //         });
    //       });
    //     } catch (error) {
    //       console.log("error", error);
    //     }

    //     // console.log(auth.currentUser);
    //   } else {
    //     setCurrentUser(userAuth);
    //     // addCollectionAndDocuments('collections',collectionArray.map(({title,items})=>({title,items})));
    //   }
    // });
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
  //collectionArray: selectCollectionPrivew
});

const mapDispatchToProps = dispatch => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
