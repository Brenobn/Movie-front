import { Background, Container, Form, InputWrapper } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';

export function SignUp() {
  return(
    <Container>
      <Form>

        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <InputWrapper>

          <Input 
            placeholder="Nome"
            type="text"
            icon={FiLogIn}
          />

          <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}
          />

          <Input 
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />
        </InputWrapper>

        <Button title="Entrar" />
        <ButtonText  
          title="Voltar para login"
          icon={GoArrowLeft}
        /> 
      </Form>

      <Background />

    </Container>
  );
}