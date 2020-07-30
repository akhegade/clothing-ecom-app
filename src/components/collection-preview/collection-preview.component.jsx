import React from "react";

import "./collection-preview.style.scss";

import CollectionItem from "../collection-item/collection-item.component";

function CollectionPreview({title, items}) {

  // const [noOfItems, setnoOfItems] = useState(4);

  return (
    <div className="collection-preview">
      {/* <span className="left-arrow" onClick={() => setnoOfItems(noOfItems - 1)}>
        {" "}
        &#8678;
      </span>
      <span className="rigth-arrow" onClick={() => setnoOfItems(noOfItems + 1 )}>
        {" "}
        &#8680;
      </span> */}
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
