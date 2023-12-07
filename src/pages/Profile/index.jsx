import { GoArrowLeft } from 'react-icons/go';
import { PiCamera } from 'react-icons/pi';
import { MdOutlinePersonOutline } from 'react-icons/md';

import { Container, Header } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return(
    <Container>
      <Header>
        <div>
          <GoArrowLeft />
          <a href="#">Voltar</a>
        </div>

        <div className="Picture">
          <img
            src="https://github.com/Brenobn.png" 
            alt="foto de usuario do github"
          />
          <div className="Icon">
            <PiCamera size={20} />
          </div>
        </div>
      </Header>
      <form>
        <Input icon={MdOutlinePersonOutline} placeholder="Nome"/>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha atual" />
        <Input placeholder="Nova senha" />
        <Button title="Salvar" />
      </form>
    </Container>
  );
}