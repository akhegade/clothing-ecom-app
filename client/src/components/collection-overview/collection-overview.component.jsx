import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCollectionPrivew} from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

// import "./collection-overview.style.scss";
import {CollectionOverviewContainer} from "./collection-overview.styles";

const CollectionOverview = ({collections}) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPrivew
});

export default connect(mapStateToProps)(CollectionOverview);
