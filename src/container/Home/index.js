import React, { useState, useRef } from "react";

import axios from "axios";

import Arrow from "../../assets/arrow.svg";
import People from "../../assets/people.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
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
      </ContainerItens>
    </Container>
  );
}

export default App;
