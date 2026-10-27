import { useState, useEffect } from "react";
import "./css/App.css";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import DataView from "./pages/dataView";

const App = () => {
  const [page, setPage] = useState("login");
  const [users, setUsers] = useState(() => {
    const db = localStorage.getItem("database");
    return db ? JSON.parse(db) : [];
  });

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const deleteDB = () => {
    setUsers([]);
  };

  useEffect(() => {
    localStorage.setItem("database", JSON.stringify(users));
  }, [users]);

  return (
    <div className="bg-stone-950 h-dvh text-white">
      {page === "register" && (
        <RegisterPage
          onLogin={() => setPage("login")}
          onViewData={() => setPage("dataview")}
          users={users}
          onAddUser={addUser}
        />
      )}
      {page === "login" && (
        <LoginPage
          onRegister={() => setPage("register")}
          onViewData={() => setPage("dataview")}
          users={users}
        />
      )}
      {page === "dataview" && (
        <DataView
          onBack={() => setPage("register")}
          users={users}
          onClearUsers={deleteDB}
        />
      )}
    </div>
  );
};

export default App;
