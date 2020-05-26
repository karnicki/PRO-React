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
  const [selectedHeader, setSelectedHeader] = useState({});

  const addUser = () => {
    setUsers([
      ...users,
      {
        idUser:
          users.length == 0 ? 1 : Math.max(...users.map((x) => x.idUser)) + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  function compareID(a, b) {
    if (a.idUser < b.idUser) {
      return -1;
    }
    if (a.idUser > b.idUser) {
      return 1;
    }
    return 0;
  }

  function compareFirstName(a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  }

  function compareLastName(a, b) {
    if (a.LastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  }

  const setCurrentlySelectedHeader = (header) => {
    setSelectedHeader(header);
    switch (header) {
      case "id user":
        setUsers([...users.sort(compareID)]);
        break;
      case "first name":
        setUsers([...users.sort(compareFirstName)]);
        break;
      case "last name":
        setUsers([...users.sort(compareLastName)]);
        break;
      default:
        break;
    }
  };

  const deleteUser = () => {
    const index = users.indexOf(selectedUser);
    if (index > -1) {
      users.splice(index, 1);
    }
    setUsers([...users]);
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
          setSelectedHeader={setCurrentlySelectedHeader}
          selectedHeader={selectedHeader}
        />
      </div>
    </>
  );
}
