import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar";
import MyFooter from "./Components/MyFooter";
import HomePage from "./Components/HomePage";
import Ristorante from "./Components/Ristorante";
import { AuthProvider } from "./Components/AuthContext";
import Piscina from "./Components/Piscina";
import AdminPanel from "./Components/AdminPanel";
import MiePrenotazioni from "./Components/MiePrenotazioni";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className=" d-flex flex-column min-vh-100">
          <header className="w-100">
            <MyNavBar />
          </header>
          <main className=" flex-grow-1">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/ristorante" element={<Ristorante />}></Route>
              <Route path="/piscina" element={<Piscina />}></Route>
              <Route path="/admin" element={<AdminPanel />}></Route>
              <Route
                path="/mie-prenotazioni"
                element={<MiePrenotazioni />}
              ></Route>
            </Routes>
          </main>
          <footer className="w-100">
            <MyFooter />
          </footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
