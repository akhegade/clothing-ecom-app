import styled, {css} from "styled-components";

const boxShadow = css`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({size}) => (size ? "380px" : "240px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    ${boxShadow}
    ${'' /* box-shadow: 0px 6px 5px black; */}

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #ffffff;
  background-image: ${({imageUrl}) => `url(../${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  ${"" /* rgb(250, 207, 18); */}
`;

export const ContenSubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  ${"" /* background-color:rgb(250, 207, 18);  */}
  ${"" /* color: #680F22 */}
`;
