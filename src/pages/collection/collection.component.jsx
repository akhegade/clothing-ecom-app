import React from "react";
import {connect} from "react-redux";

import {selectCollection} from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

// import "./collection.style.scss";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemContainer,
  CollectionItemDiv
} from "./collection.styles.jsx";

const CollectionPage = ({collection}) => {
  const {title, items} = collection;
  console.log("CollectionPage items", items);

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title} </CollectionTitle>
      <CollectionItemContainer>
        {items.map(item => (
          <CollectionItemDiv className="collection-item" key={item.id} item={item} />
        ))}
      </CollectionItemContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collection: selectCollection(ownprops.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
