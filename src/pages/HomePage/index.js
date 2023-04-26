import { HomeContainer, Header, IconsContainer } from "./styled";
import thebookhouse from "../../assets/images/thebookhouse.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate(); 
  
  return (
    <HomeContainer>
      <Header>
        <img src={thebookhouse} alt="logo"></img>
        <input type="text" id="text-area" value="Busque por um item..." />
        <IconsContainer>
          <ion-icon name="bag-handle-outline"></ion-icon>
          <ion-icon onClick={() => navigate("/")} name="log-out-outline"></ion-icon>
        </IconsContainer>
      </Header>
    </HomeContainer>
  );
}
