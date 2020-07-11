import React from "react";

import "./collection-preview.style.scss";

import CollectionItem from "../collection-item/collection-item.component";

function CollectionPreview({title, items}) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherItemPorps}) => (
            <CollectionItem key={id} {...otherItemPorps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
