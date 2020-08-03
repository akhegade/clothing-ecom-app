import React from "react";

// import "./collection-preview.style.scss";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionName,
  PreviewContainer
} from "./collection-preview.styles";

function CollectionPreview({title, items}) {
  // const [noOfItems, setnoOfItems] = useState(4);

  return (
    <CollectionPreviewContainer>
      {/* <span className="left-arrow" onClick={() => setnoOfItems(noOfItems - 1)}>
        {" "}
        &#8678;
      </span>
      <span className="rigth-arrow" onClick={() => setnoOfItems(noOfItems + 1 )}>
        {" "}
        &#8680;
      </span> */}
      <CollectionName>{title}</CollectionName>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
