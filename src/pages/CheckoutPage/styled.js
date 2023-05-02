import styled from "styled-components";
import { mainColorButton, secondaryColorButton } from "../../constants/colors";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  .cart {
    margin-top: 60px;
  }
`;
export const ItensContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const HeaderC = styled.div`
  background-color: white;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.09);

  @media screen and (max-width: 768px) {
    height: 12vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .logo {
    max-height: 90px;
    padding-bottom: 40px;
  }
`;

export const OrderedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 100%;
  width: 30%;
  padding: 20px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 20px;
    margin-bottom: 30px;
    margin-top: 5px;
  }
  h4 {
    font-weight: normal;
    color: brown;
    text-decoration: underline;
    margin-top: -40px;
  }
  button {
    width: 100%;
    background-color: ${(props) =>
      props.enabled ? secondaryColorButton : mainColorButton};
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: ${(props) => (props.enabled ? "pointer" : "not-allowed")};
    transition: all 0.3s ease;
    &:hover {
      background-color: ${(props) =>
        props.enabled ? "brown" : mainColorButton};
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    width: 100%;
  }
  input {
    width: 95%;
    padding: 10px;
    font-size: 16px;
  }
`;

export const ListProducts = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  h3 {
    font-weight: 700;
  }
`;

export const TotalProducts = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  h2 {
    font-weight: 700;
  }
  h3 {
    font-weight: 700;
  }
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
  width: 100%;
`;

export const InputField = styled.input`
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  margin-bottom: 16px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 65%;

  img {
    max-height: 110px;
  }

  h2 {
    max-width: 60%;
    margin-left: -100px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);

  img {
    max-height: 110px;
    max-width: 30%;
  }

  h2 {
    max-width: 60%;
    margin-left: 40px;
  }

  h3 {
    margin-left: auto;
  }

  strong {
    font-weight: bold;
  }
`;
