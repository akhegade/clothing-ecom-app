import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCollectionPrivew} from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-overview.style.scss";

const CollectionOverview = ({collections}) => {
  return (
    <div className="collection-overview">
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPrivew
});

export default connect(mapStateToProps)(CollectionOverview);
