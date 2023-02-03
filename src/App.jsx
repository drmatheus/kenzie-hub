import { GlobalStyles } from "./styles";
import { MyRoutes as Routes } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext";

export function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ToastContainer />
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}
