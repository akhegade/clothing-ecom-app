import React from "react";
import {Route} from "react-router-dom";

import {connect} from "react-redux";
import {setShopCollections} from "../../redux/shop/shop.action";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import "./shop.style.scss";

import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {loading} = this.state;
    const {setShopCollections} = this.props;
    const collectionRef = firestore.collection("collections");

    // OBSERVABLE PATTREN : this is using observable pattern provided the firebase
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
    //   const collections = convertCollectionsSnapShotToMap(snapshot);
    //   setShopCollections(collections);
    //   this.setState({loading: !loading});
    //   // console.log("newCollectionObject", newCollectionObject);

    // });

    // PROMISE PATTREN :
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
      setShopCollections(collectionsMap);
      this.setState({loading: !loading});
    });

    // FETCHING API :
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/your-fash/databases/(default)/documents/collections"
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
          // component={CollectionOverview}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
          //component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setShopCollections: collections => dispatch(setShopCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
