import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;
export const Header = styled.header`
  background-color: white;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.09);

  img {
    height: 95px;
  }

  input {
    max-width: 25%;
    max-height: 9px;
    font-size: 15px;
    color: gray;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-size: 15px;
    margin-right: 10px;
  }
`;
