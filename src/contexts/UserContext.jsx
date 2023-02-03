import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await api.get("profile", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      setUserData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ setUserData, userData, loading, getUserData }}
    >
      {children}
    </UserContext.Provider>
  );
}
