import {
  Background,
  Container,
  Form,
  InputWrapper,
  Title,
  Text,
  Paragraph,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useAuth } from "../../hooks/auth";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  const data = useAuth();
  console.log("MEU CONTEXTO =>", data);

  return (
    <Container>
      <Form>
        <Title>RocketMovies</Title>
        <Paragraph>Aplicação para acompanhar tudo que assistir.</Paragraph>

        <Text>Faça seu login</Text>

        <InputWrapper>
          <Input placeholder="E-mail" type="text" icon={FiMail} />

          <Input placeholder="Senha" type="password" icon={FiLock} />
        </InputWrapper>

        <Button title="Entrar" />
        <ButtonText title="Criar conta" to="/register" />
      </Form>

      <Background />
    </Container>
  );
}
