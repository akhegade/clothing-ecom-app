import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selector";

import MenuItem from "../../components/menu-items/menu-item.component";

// import "./directory.style.scss";
import {DirectoryContainer} from "./directory.styles";

const Directory = ({sections}) => {
  return (
    <DirectoryContainer>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} subTitle="SHOP NOW" {...otherSectionProps} />
      ))}
    </DirectoryContainer>
  );
};

// const mapStateToProps = state => ({
//   sections: state.directory.sections
// });

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
