import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { ApiProvider } from "../contexts/ApiContext";
import { TechProvider } from "../contexts/TechContext";

export function MyRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ApiProvider>
            <Login />
          </ApiProvider>
        }
      ></Route>
      <Route
        path="*"
        element={
          <ApiProvider>
            <Login />
          </ApiProvider>
        }
      ></Route>
      <Route
        path="/home"
        element={
          <TechProvider>
            <Home />
          </TechProvider>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <ApiProvider>
            <Register />
          </ApiProvider>
        }
      ></Route>
    </Routes>
  );
}
