import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <div className=" d-flex flex-column min-vh-100">
        <header className="w-100">
          <MyNavBar />
        </header>
        <main className=" flex-grow-1">
          <Routes></Routes>
        </main>
        <footer className="w-100"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
