import styled, {css,keyframes} from "styled-components";
import {Link, NavLink} from "react-router-dom";

// const OptionContainerStyles = css`
//   position: relative;
//   padding: 10px 10px;
//   cursor: pointer;
// `;

const changeColors = keyframes`
0%{
  color:#cff6cf;
}
10%{

}
20%{
  color:#ffa5b0;
}
30%{

}
40%{
  color:#ff4b5c;
}
50%{

}
60%{
  color:#ec0101
}
70%{

}
80%{
  color:#00416d
}
90%{

}
100%{
  color:#e11d74;
}
`;

const optionLinkHoverAndActiveClassAppend = css`
  :hover {
    color: blue;
    border-bottom: 2px solid white;
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
  display: flex;
  position: relative;
  height: 100%;
  width: auto;
  padding: 10px;
`;
export const TitleContainer = styled.div`
  padding-top: 0.5rem;
  width: 120px;
  height: 100%;
  color: white;
  text-align: center;
  margin-left: 0.2rem;
  font-size: 1.5rem;
  animation:${changeColors} 5s ease-in-out infinite 2s;
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
  color: white;
  ${"" /* transition:border-bottom 2s ease-out ; */}
  transition: border-bottom 3s ease;
  ${({as}) => (as !== "div" ? optionLinkHoverAndActiveClassAppend : null)};
  ${"" /* border-bottom:${(props)=> props.active ? "2px solid blue" : "none"}; */}
`;
