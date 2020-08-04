import styled, {css} from "styled-components";
import {Link, NavLink} from "react-router-dom";

// const OptionContainerStyles = css`
//   position: relative;
//   padding: 10px 10px;
//   cursor: pointer;
// `;

const optionLinkHoverAndActiveClassAppend = css`
  :hover {
    color: blue;
    border-bottom: 2px solid blue;
    
  }

  &.active {
    color: blue;
    border-bottom: 2px solid blue;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoConatainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(NavLink)`
  position: relative;
  padding: 10px 10px;
  cursor: pointer;
  ${"" /* transition:border-bottom 2s ease-out ; */}
  transition: all 3s ease;
  ${({as}) => (as!=='div' ? optionLinkHoverAndActiveClassAppend : null)};
  ${"" /* border-bottom:${(props)=> props.active ? "2px solid blue" : "none"}; */}
`;
