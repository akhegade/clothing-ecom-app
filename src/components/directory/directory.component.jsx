import React from "react";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selector";

import "./directory.style.scss";
import MenuItem from "../../components/menu-items/menu-item.component";

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} subTitle="SHOP NOW" {...otherSectionProps} />
      ))}
    </div>
  );
};

// const mapStateToProps = state => ({
//   sections: state.directory.sections
// });

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
