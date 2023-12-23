import {
  Background,
  Container,
  Form,
  InputWrapper,
  Title,
  Paragraph,
  Text,
} from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <Form>
        <Title>RocketMovies</Title>
        <Paragraph>Aplicação para acompanhar tudo que assistir.</Paragraph>

        <Text>Faça seu login</Text>

        <InputWrapper>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button title="Cadastrar" onClick={handleSignUp} />
        <ButtonText title="Voltar para login" icon={GoArrowLeft} to="/" />
      </Form>

      <Background />
    </Container>
  );
}
