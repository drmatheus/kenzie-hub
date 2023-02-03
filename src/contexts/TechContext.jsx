import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { getUserData } = useContext(UserContext);

  async function submitTechnology(data, close) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    console.log(token);
    console.log(data);
    try {
      await api.post("users/techs", data, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia cadastrada com sucesso");
      close();
      getUserData();
    } catch (error) {
      toast.error(
        "Esta tecnologia já foi cadastrada. Você pode editar ela clicando em cima dela."
      );
    }
  }

  async function submitDeleteTechnology(close, id) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      await api.delete(`users/techs/${id}`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia excluida com sucesso");
      close();
      getUserData();
    } catch (error) {
      console.log(error);
    }
  }

  async function submitAttTechnology(data, id, close) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      await api.put(`users/techs/${id}`, data, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia editada com sucesso");
      close();
      getUserData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechContext.Provider
      value={{ submitDeleteTechnology, submitAttTechnology, submitTechnology }}
    >
      {children}
    </TechContext.Provider>
  );
}
