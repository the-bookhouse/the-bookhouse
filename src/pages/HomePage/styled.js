import styled from "styled-components";

export const HomeContainer = styled.div`
  box-sizing: border-box;
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
    height: 115px;
    padding-bottom: 20px;
  }

  input {
    max-width: 25%;
    max-height: 9px;
    font-size: 15px;
    color: gray;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;

  ion-icon {
    font-size: 30px;
    cursor: pointer;
  }
`;

export const BooksContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 11vh;
`

export const Book = styled.div`
  width: 200px;
  height: 350px;
  margin-right: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px 10px;
  
  img {
    width: 100%;
    height: 80%;
    margin-bottom: 10px;
  }

  h1{
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }

  p {
    font-size: 20px;
  }
`

export const Buy = styled.button`
  width: 50%;
  height: 7%;
  background: green;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`


