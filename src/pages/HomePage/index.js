import { HomeContainer, Header, Container } from "./styled";
import thebookhouse from "../../assets/images/thebookhouse.png";

export default function HomePage() {
  return (
    <HomeContainer>
      <Header>
        <img src={thebookhouse} alt="logo"></img>
        <input type="text" id="text-area" value="Busque por um item..." />
        <Container>
          <h1>Icone Carrinho</h1>
          <h1>Icone Saída</h1>
        </Container>
      </Header>
    </HomeContainer>
  );
}
