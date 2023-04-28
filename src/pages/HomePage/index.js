import { HomeContainer, Header, IconsContainer } from "./styled";
import thebookhouse from "../../assets/images/thebookhouse.png";
import { useLogout } from "../../services/auth";
import { useState } from "react";

export default function HomePage() {
  const logout = useLogout();
  const [searchValue, setSearchValue] = useState("Busque por um item...");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <HomeContainer>
      <Header>
        <img src={thebookhouse} alt="logo"></img>
        <input
          type="text"
          id="text-area"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <IconsContainer>
          <ion-icon name="bag-handle-outline"></ion-icon>
          <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
        </IconsContainer>
      </Header>
    </HomeContainer>
  );
}
