import styled from "styled-components";

export const HeaderConteiner = styled.header`
  background-color: white;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.09);

  @media screen and (max-width: 768px) {
    height: 12vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .logo {
    height: 120%;
    padding: 10px;
    margin-bottom: 17px;
    margin-left: 50px;
    margin-right: 20px;
    cursor: pointer;
  }

  .user-container {
    display: flex;
    align-items: center;
    margin-left: 20px;

    h1 {
      font-size: 18px;
      color: brown;
      margin-right: 40px;
      font-weight: 400;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 400px;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      font-size: 15px;
      color: gray;
      border: none;
      border-bottom: 2px solid #ccc;
      padding: 10px;
      margin-right: -60px;

      &:focus {
        outline: none;
        border-bottom: 2px solid #bc8f8f;
      }

      &::placeholder {
        color: #ccc;
      }
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-right: 50px;

  ion-icon {
    font-size: 30px;
    cursor: pointer;
  }
`;

export const Counter = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  bottom: -5px;
  right: -5px;
  z-index: 2;
`

export const CartIcon = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`
