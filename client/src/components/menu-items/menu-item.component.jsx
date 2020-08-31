import React from "react";
import {withRouter} from "react-router-dom";

import "./menu-item.style.scss";

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  ContentTitle,
  ContenSubTitle
} from "./menu-item.styles";

const MenuItem = ({
  title,
  subTitle,
  imageUrl,
  size,
  linkUrl,
  history,
  match
}) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContenSubTitle className="sibtitle">SHOP NOW</ContenSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
