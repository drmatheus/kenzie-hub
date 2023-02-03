import logo from "../../assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./styles";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Header() {
  const navegate = useNavigate();
  const { setUserData } = useContext(UserContext);

  function handleLogout() {
    setUserData({});
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    toast.success("Logout realizado com sucesso");
    navegate("/login");
  }

  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="" />
        <button onClick={handleLogout}>Sair</button>
      </div>
    </StyledHeader>
  );
}
