import { CheckoutContainer, ItensContainer, Header, OrderedContainer, ListProducts, TotalProducts, Divider, CartContainer, CartList } from "./styled";

import thebookhouse from "../../assets/images/thebookhouse.png";
import ModalCheckout from "../../components/ModalCheckout";
import CheckoutForm from "../../components/CheckoutForm"
import AuthContext from "../../context/AuthContext";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CheckoutPage() {
  const { userName, cartLoader } = useContext(AuthContext);
  const [formCompleted, setFormCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ address: "", cardNumber: "", paymentMethod: "" });

  const total = cartLoader.reduce((acc, item) => acc + item.price, 0);

  function submitForm(e) {
    e.preventDefault();
    setShowModal(true);
  
    const orderData = {
      userName: userName,
      address: form.address,
      cardNumber: form.cardNumber,
      paymentMethod: form.paymentMethod,
      total: total.toFixed(2),
    };
  
    const token = localStorage.getItem("token");
    axios
      .post(`${process.env.REACT_APP_API_URL}/orders`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }
  
  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleCloseModal() {
    setShowModal(false);
    window.location.href = "/home";
  }

  useEffect(() => {
    const isFormValid = Object.values(form).every((value) => Boolean(value));
    setFormCompleted(isFormValid);
  }, [form]);

  return (
    <CheckoutContainer>
      <Header>
        <Link to="/home">
          <img src={thebookhouse} alt="logo" className="logo" />
        </Link>
      </Header>

      <h1 className="cart">Meu Carrinho</h1>
      <ItensContainer>
        <CartList>
          {cartLoader.map((item) => (
            <CartContainer key={item.id}>
              <img src={item.image} alt="book"></img>
              <h2>{item.title}</h2>
              <h3>
                <strong>R$ {item.price.toFixed(2)}</strong>
              </h3>
            </CartContainer>
          ))}
        </CartList>

        <OrderedContainer enabled={formCompleted}>
          <h1>Resumo do Pedido</h1>
          <ListProducts>
            <h2>Quantidade produtos</h2>
            <h3>
              <strong>{cartLoader.length}</strong>
            </h3>
          </ListProducts>
          <Divider />
          <TotalProducts>
            <h2>Total</h2>
            <h3>R$ {total.toFixed(2)}</h3>
          </TotalProducts>
          <Divider />
          <Link to="/home"><h4>Continue Comprando</h4></Link>
          <CheckoutForm
            form={form}
            handleInputChange={handleInputChange}
            submitForm={submitForm}
            formCompleted={formCompleted}
          />
        </OrderedContainer>
      </ItensContainer>

      {showModal && (
        <ModalCheckout
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          userName={userName}
          form={form}
          total={total}
        />
      )}
    </CheckoutContainer>
  );
}
