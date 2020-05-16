import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Anna", lastName: "Kwiatkowska" },
    { idUser: 3, firstName: "Andrzej", lastName: "Andrzejewski" },
    { idUser: 4, firstName: "Marcin", lastName: "Nowak" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = (e) => {
    setUsers([
      ...users,
      {
        idUser: users.length == 0 ? 1 : users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const deleteUser = (e) => {
    const tmp = users;
    tmp.pop();
    setUsers([...tmp]);
  };

  return (
    <>
      <Header />

      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj uźytkownika
        </button>
        <button type="button" onClick={deleteUser} className="btn">
          Usuń uźytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
        />
      </div>
    </>
  );
}
