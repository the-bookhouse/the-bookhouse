import { HeaderConteiner, IconsContainer } from "./styled";
import thebookhouse from "../../assets/images/thebookhouse.png";
import { useLogout } from "../../services/auth";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { userName } = useContext(AuthContext);
  const logout = useLogout();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCheckoutClick = () => {
    navigate("/checkout");
  };

  return (
    <HeaderConteiner>
      <img src={thebookhouse} alt="logo" className="logo" />
      <div className="search-container">
        <input
          type="text"
          id="text-area"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Busque por um item..."
        />
      </div>
      <div className="user-container">
        <h1>Olá, {userName}</h1>
        <IconsContainer>
          <ion-icon
            onClick={handleCheckoutClick}
            name="bag-handle-outline"
          ></ion-icon>
          <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
        </IconsContainer>
      </div>
    </HeaderConteiner>
  );
}
