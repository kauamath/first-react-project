import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Arrow from "../../assets/arrow.svg";
import Avatar from "../../assets/avatar.svg";
import Trash from "../../assets/trash.svg";

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  Container,
  Image,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

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

function goBackPage() {
  navigate("/")
}

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />

      <ContainerItens isBlur = {true}>
        <H1>Usuários!</H1>

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
        <Button isBack ={true} onClick={goBackPage}>
          <img alt="img-seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
