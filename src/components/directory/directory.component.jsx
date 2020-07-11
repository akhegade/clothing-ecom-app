import React from "react";
import "./directory.style.scss";
import MenuItem from "../../components/menu-items/menu-item.component";
import SECTION_DATA from "./sections.data";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTION_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} subTitle="SHOP NOW" {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
