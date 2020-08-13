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
    const {loading} =this.state
    const {setShopCollections} = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collections = await convertCollectionsSnapShotToMap(snapshot);
      setShopCollections(collections);
      this.setState({loading: !loading});
      // console.log("newCollectionObject", newCollectionObject);
    });
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
            <CollectionOverviewWithSpinner
              isLoading={loading}
              {...props}
            />
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
