import {
  Background,
  Container,
  Form,
  InputWrapper,
  Title,
  Paragraph,
  Text,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";

export function SignUp() {
  return (
    <Container>
      <Form>
        <Title>RocketMovies</Title>
        <Paragraph>Aplicação para acompanhar tudo que assistir.</Paragraph>

        <Text>Faça seu login</Text>

        <InputWrapper>
          <Input placeholder="Nome" type="text" icon={FiUser} />

          <Input placeholder="E-mail" type="text" icon={FiMail} />

          <Input placeholder="Senha" type="password" icon={FiLock} />
        </InputWrapper>

        <Button title="Entrar" />
        <ButtonText title="Voltar para login" icon={GoArrowLeft} to="/" />
      </Form>

      <Background />
    </Container>
  );
}
