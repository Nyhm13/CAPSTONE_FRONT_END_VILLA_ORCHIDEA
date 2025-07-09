import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const AdminPanel = () => {
  const { userRole } = useContext(AuthContext);

  if (userRole !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mt-8">
      <h1 className=" text-black">HELLO ADMIN</h1>
      <small>
        I bambini sotto i 12 anni non vengono inclusi nel numero di postazioni
        richieste e avranno una tariffa ridotta rispetto a chi prenota una
        postazione
      </small>
    </div>
  );
};

export default AdminPanel;
