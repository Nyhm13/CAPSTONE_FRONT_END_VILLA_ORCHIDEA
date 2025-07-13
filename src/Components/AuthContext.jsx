import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Leggi il token dal localStorage quando l'app parte
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      const decoded = jwtDecode(savedToken);
      setUserRole(decoded.ruolo);
      // console.log(
      //   "ruolo utentente recuperato dal localStorage token:",
      //   decoded.ruolo
      // );
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    const decoded = jwtDecode(token);
    setUserRole(decoded.ruolo);
    // console.log("ruolo utente dopo il login", decoded.ruolo);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserRole(null);
    // console.log("utente sloggato");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated, userRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
