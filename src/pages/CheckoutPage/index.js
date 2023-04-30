import {
  CheckoutContainer,
  Header,
  OrderedContainer,
  OrderSummary,
  Product,
  Total,
  Price,
  TotalPrice,
  Divider,
  CheckoutButton,
  CartContainer,
} from "./styled";
import thebookhouse from "../../assets/images/thebookhouse.png";
import book1 from "../../assets/images/book1.jpeg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

export default function CheckoutPage() {
  const [cartList, setCartList] = useState([])
  const { token, userName } = useContext(AuthContext);
  const {total, setTotal} = useState(0)
  const config = {
    headers:
      { Authorization: `Bearer ${token}` }
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
      .then((res) => {
        setCartList(res.data)
      })
      .catch((err) => alert(err.message))
  }, [])

  return (
    <CheckoutContainer>
      <Header>
        <Link to="/home">
          <img src={thebookhouse} alt="logo" className="logo" />
        </Link>
      </Header>

      <h1>Meu Carrinho</h1>
      {cartList.map((book, index) => {
        const { image, title, price } = book
        return (
          <CartContainer key={index}>
            <img src={image} alt="book"></img>
            <h2>
              {title}
            </h2>
            <h3>R$ {price}</h3>
          </CartContainer>
        )
      })}

      <OrderedContainer>
        <h1>Resumo do Pedido</h1>
        <OrderSummary>
          <div>
            {cartList.map(book => {
              return (
                  <Product>{book.title}</Product>
              )
            })}
            <Total>Total</Total>
          </div>

          <div>
            {cartList.map(book => {
              return (
                <Price>R$ {book.price}</Price>
              )
            })}
            <TotalPrice>R$ {total}</TotalPrice>
          </div>
        </OrderSummary>
        <Divider />
        <CheckoutButton >Finalizar Pedido</CheckoutButton>
      </OrderedContainer>
    </CheckoutContainer>
  );
}
