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
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const [avatar, setAvatar] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    await updateProfile({ user });
  }

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
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={MdOutlineMail}
          value={email}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={HiOutlineLockClosed}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={HiOutlineLockClosed}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </form>
    </Container>
  );
}
