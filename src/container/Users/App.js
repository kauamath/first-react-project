import React, { useState, useRef, useEffect } from "react";

import axios from "axios";

import Arrow from "./assets/img/arrow.svg";
import People from "./assets/img/people.svg";
import Trash from "./assets/img/trash.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUsers } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    console.log(newUsers);
    setUsers([...users, newUsers]);
  }

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />

      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>
        <Button onClick={addNewUser}>
          Cadastrar <img alt="img-seta" src={Arrow} />{" "}
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo"></img>
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
