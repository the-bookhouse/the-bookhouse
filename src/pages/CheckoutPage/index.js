import {
  CheckoutContainer,
  Header,
  OrderedContainer,
  ListProducts,
  TotalProducts,
  Divider,
  CartContainer,
  SelectStyled,
  Modal,
  ModalOverlay,
  Infos,
  CartList
} from "./styled";
import thebookhouse from "../../assets/images/thebookhouse.png";
import book1 from "../../assets/images/book1.jpeg";
import book2 from "../../assets/images/book2.jpeg";
import concluded from "../../assets/images/concluded.gif";
import AuthContext from "../../context/AuthContext";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

export default function CheckoutPage() {
  const { userName } = useContext(AuthContext);
  const [formCompleted, setFormCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    address: "",
    cardNumber: "",
    paymentMethod: "",
  });
  const [cart] = useState([
    {
      id: 1,
      title:
        "Python Programming: 3 books in 1 - Ultimate Beginner's, Intermediate & Advanced Guide to Learn Python Step by Step",
      price: 145,
      quantity: 1,
      image: book1,
    },
    {
      id: 2,
      title: "Data Science for Dummies",
      price: 80,
      quantity: 1,
      image: book2,
    },
  ]);

  useEffect(() => {
    const isFormValid = Object.values(form).every((value) => Boolean(value));
    setFormCompleted(isFormValid);
  }, [form]);

  function submitForm(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleCloseModal() {
    setShowModal(false);
    window.location.href = "/home";
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CheckoutContainer>
      <Header>
        <Link to="/home">
          <img src={thebookhouse} alt="logo" className="logo" />
        </Link>
      </Header>

      <h1 className="cart">Meu Carrinho</h1>

      <CartList>
        {cart.map((item) => (
          <CartContainer key={item.id}>
            <img src={item.image} alt="book"></img>
            <h2>{item.title}</h2>
            <h3><strong>R$ {item.price.toFixed(2)}</strong></h3>
          </CartContainer>
        ))}
      </CartList>

      <OrderedContainer enabled={formCompleted}>
        <h1>Resumo do Pedido</h1>

        <ListProducts>
          <h2>
            {cart.length} produto{cart.length > 1 ? "s" : ""}
          </h2>
          <h3><strong>R$ {total.toFixed(2)}</strong></h3>
        </ListProducts>

        <Divider />

        <TotalProducts>
          <h2>Total</h2>
          <h3>R$ {total.toFixed(2)}</h3>
        </TotalProducts>

        <Divider />

        <Link to="/home">
          <h4>Continue Comprando</h4>
        </Link>

        <form onSubmit={submitForm}>
          <SelectStyled
            required
            className="form-select"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Forma de pagamento
            </option>
            <option value="Débito">Débito</option>
            <option value="Credito">Crédito</option>
          </SelectStyled>
          <input
            required
            type="text"
            placeholder="Número do cartão"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleInputChange}
          />
          <input
            required
            type="text"
            placeholder="Endereço"
            name="address"
            value={form.address}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={!formCompleted}>
            Finalizar Pedido
          </button>
        </form>
      </OrderedContainer>
      {showModal && (
        <>
          <ModalOverlay />
          <Modal className="modal-content" showModal={showModal}>
            <ion-icon
              onClick={handleCloseModal}
              name="close-outline"
            ></ion-icon>
            <img src={concluded} alt="concluded" />
            <h2>Pedido Concluido com Sucesso</h2>
            <Infos>
              <p>
                <strong>Nome: </strong> {userName}
              </p>
              <p>
                <strong>Endereço: </strong> {form.address}
              </p>
              <p>
                <strong>Número do cartão: </strong> {form.cardNumber}
              </p>
              <p>
                <strong>Forma de pagamento: </strong> {form.paymentMethod}
              </p>
              <p>
                <strong>Total Compra: </strong> {total.toFixed(2)}
              </p>
            </Infos>
          </Modal>
        </>
      )}
    </CheckoutContainer>
  );
}
