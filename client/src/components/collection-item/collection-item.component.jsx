import React from "react";
import {connect} from "react-redux";

import {addItem} from "../../redux/cart/cart.action";

// import CustomButton from "../custom-button/custom-button.component";

// import "./collection-item.style.scss";

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton
} from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>&#x20B9;{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        {" "}
        Add To Cart{" "}
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
