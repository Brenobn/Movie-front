import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { GoArrowLeft } from "react-icons/go";
import { PiCamera } from "react-icons/pi";
import { MdOutlinePersonOutline, MdOutlineMail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi2";

import { Container, Header } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  return (
    <Container>
      <Header>
        <div>
          <GoArrowLeft />
          <Link to="/">Voltar</Link>
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
        <Input
          placeholder="Nome"
          type="text"
          icon={MdOutlinePersonOutline}
          value={name}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={MdOutlineMail}
          value={email}
        />
        <Input icon={HiOutlineLockClosed} placeholder="Senha atual" />
        <Input icon={HiOutlineLockClosed} placeholder="Nova senha" />
        <Button title="Salvar" />
      </form>
    </Container>
  );
}
