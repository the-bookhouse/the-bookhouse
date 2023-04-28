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

export default function CheckoutPage() {
  return (
    <CheckoutContainer>
      <Header>
        <Link to="/home">
          <img src={thebookhouse} alt="logo" className="logo" />
        </Link>
      </Header>

      <h1>Meu Carrinho</h1>
      <CartContainer>
        <img src={book1} alt="book"></img>
        <h2>
          Python Programming: 3 books in 1 - Ultimate Beginner's, Intermediate &
          Advanced Guide to Learn Python Step by Step
        </h2>
        <h3>R$ 145,00</h3>
      </CartContainer>

      <OrderedContainer>
        <h1>Resumo do Pedido</h1>
        <OrderSummary>
          <div>
            <Product>1 produto</Product>
            <Total>Total</Total>
          </div>

          <div>
            <Price>R$ 145,00</Price>
            <TotalPrice>R$ 145,00</TotalPrice>
          </div>
        </OrderSummary>
        <Divider />
        <CheckoutButton>Finalizar Pedido</CheckoutButton>
      </OrderedContainer>
    </CheckoutContainer>
  );
}
