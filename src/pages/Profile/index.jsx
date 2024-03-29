import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

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

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <Header>
        <div>
          <GoArrowLeft />
          <Link to="/">Voltar</Link>
        </div>

        <div className="Picture">
          <img src={avatar} alt="foto de usuario do github" />
          <label htmlFor="picture">
            <PiCamera size={20} />

            <input id="picture" type="file" onChange={handleChangeAvatar} />
          </label>
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
