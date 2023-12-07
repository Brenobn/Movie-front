import { GoArrowLeft } from 'react-icons/go';
import { PiCamera } from 'react-icons/pi';
import { MdOutlinePersonOutline, MdOutlineMail } from 'react-icons/md';
import { HiOutlineLockClosed } from 'react-icons/hi2'

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
        <Input icon={MdOutlineMail} placeholder="E-mail" />
        <Input icon={HiOutlineLockClosed} placeholder="Senha atual" />
        <Input icon={HiOutlineLockClosed} placeholder="Nova senha" />
        <Button title="Salvar" />
      </form>
    </Container>
  );
}