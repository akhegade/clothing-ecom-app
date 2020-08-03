import styled from "styled-components";

export const EmptyBoxContainer = styled.div`
  margin: 50% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: opacity;
  animation-duration: 6s;
  animation-fill-mode: forwards;



${'' /* const animationOpacity = css` */}
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  ${'' /* } `; */}
${'' /* //   ${animationOpacity} */}
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 5px auto;
  color: red;
`;
