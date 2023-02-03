import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ApiContext = createContext({});

export function ApiProvider({ children }) {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  async function login(data) {
    try {
      const login = await api.post("sessions", data);
      localStorage.setItem("@TOKEN", JSON.stringify(login.data.token));
      localStorage.setItem("@USERID", JSON.stringify(login.data.user.id));

      setUserData(login.data.user);
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha incorretos");
    }
  }

  async function registerApi(data) {
    try {
      await api.post("users", data);
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/login"), 5000);
    } catch {
      toast.error("Email já cadastrado");
    }
  }

  return (
    <ApiContext.Provider value={{ login, registerApi }}>
      {children}
    </ApiContext.Provider>
  );
}
