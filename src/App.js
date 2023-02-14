import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUser] = useState([]);

  const addUserHandler = (userDataEntered) => {
    setUser((prevUserList) => {
      return [...prevUserList, userDataEntered];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />;
      <UsersList usersData={users} />
    </div>
  );
}

export default App;
