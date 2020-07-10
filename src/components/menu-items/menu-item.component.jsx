import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({title, subTitle, imageUrl, size}) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{backgroundImage: `url(${imageUrl})`}}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sibtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
