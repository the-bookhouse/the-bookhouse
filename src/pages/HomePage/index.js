import Header from "../../components/Header";
import { HomeContainer, BooksContainer, Book, Buy } from "./styled";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function HomePage() {
  const [addProduct, setAddProduct] = useState(false)
  const { token, userName, setCartLoader } = useContext(AuthContext);

  const config = {
    headers:
      { Authorization: `Bearer ${token}` }
  };
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/home`, config)
      .then((res) => {
        setProductsList(res.data)
      })
      .catch((err) => alert(err.message))
      // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const config = {
      headers:
        { Authorization: `Bearer ${token}` }
    };
    axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
      .then((res) => {
        setCartLoader(res.data)
      })
      .catch((err) => console.log(err.message))
      // eslint-disable-next-line
  }, [addProduct])

  function addCart(id) {
    const body = { id }
    axios.post(`${process.env.REACT_APP_API_URL}/home`, body, config)
      .then((res) => {
        setAddProduct(true)
        alert('Produto adicionado ao carrinho')
      })
      .catch((err) => alert(err.response.data))
  }


  return (
    <HomeContainer>
      <Header />

      <BooksContainer>

        {productsList.map((p, i) =>
          <Book key={i}>
            <img src={p.image} alt={p.title}></img>
            <h1>{p.title}</h1>
            <p>R${p.price.toFixed(2)}</p>
            <Buy onClick={() => addCart(p._id)}>COMPRAR</Buy>
          </Book>

        )}

      </BooksContainer>

    </HomeContainer>
  );
}
