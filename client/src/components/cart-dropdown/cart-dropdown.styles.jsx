import styled, {css} from "styled-components";

const animationOutSideIn = css`
  @keyframes out-side-in {
    0% {
      // display: none;
      width: 0px;
      height: 0;
      padding: 0px;
    }
    100% {
      // background-color: red;
      // display: flex;
    }
  }
`;
const animationOpacity = css`
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const beforeElement = css`
  ::before {
    position: absolute;
    top: -9px;
    right: 30px;
    content: "";
    background-color: white;
    width: 15px;
    height: 15px;
    border-top: 1px solid rosybrown;
    border-right: none; // 0px solid white;
    // border-bottom:  1px solid rosybrown;
    border-left: 1px solid rosybrown;
    -ms-transform: rotate(45deg); /* IE 9 */
    transform: rotate(45deg);
    animation-name: opacity;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid rosybrown;
  background-color: white;
  top: 90%;
  right: -6px;
  z-index: 5;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  animation-name: out-side-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  ${beforeElement}

  ${animationOutSideIn}

  button {
    margin-top: auto;
    border-radius: 0;
    animation-name: opacity;
    animation-duration: 5s;
    animation-fill-mode: forwards;

    ${animationOpacity}
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
