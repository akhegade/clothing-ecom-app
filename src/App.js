import React from "react";
import {Switch, Route} from "react-router-dom";
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
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});
      // createUserProfileDocument(user);

      //   console.log("userAuth =",userAuth);
      if (userAuth) {
        //verify email
        // verifyEmail(auth);

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // consolce.log(snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              // ...auth.currentUser.email,
              emailVerified: auth.currentUser.emailVerified,
              ...snapShot.data()
            }
          });
        });
        console.log(auth.currentUser);
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    // const {emailVerified} = this.state.currentUser
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* {this.state.currentUser ? (
          this.state.currentUser.emailVerified ? null : (
            <EmailVerify />
          )
        ) : null} */}
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

export default App;
