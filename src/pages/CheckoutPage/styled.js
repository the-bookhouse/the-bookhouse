import styled from "styled-components";
import { mainColorButton } from "../../constants/colors";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;

  h1 {
    margin-top: 100px;
  }
`;

export const Header = styled.div`
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
    max-height: 94px;
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
  margin-top: 150px;
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 5px;
  }
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: auto;
`;

export const Product = styled.h2`
  font-size: 18px;
`;

export const Total = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
`;

export const Price = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const TotalPrice = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
  width: 100%;
`;

export const CheckoutButton = styled.button`
  background-color: ${mainColorButton};
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: brown;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 60%;
  padding: 20px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  margin-top: 150px;
  margin-left: -200px;

  img {
    max-height: 110px;
  }

  h2 {
    max-width: 60%;
    margin-left: -100px;
  }
`;
