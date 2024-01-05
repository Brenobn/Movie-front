import { useAuth } from "../../hooks/auth";

import {
  Container,
  Profile,
  HeaderWrapper,
  Text,
  TextHeader,
  Name,
  LinkToGoOut,
  ProfileImg,
} from "./styles";

import { Input } from "../Input";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <HeaderWrapper>
        <Text>RocketMovies</Text>

        <Input placeholder="Pesquisar pelo título" />

        <Profile>
          <TextHeader>
            <Name to="/profile">Breno Braga</Name>
            <LinkToGoOut onClick={signOut}>sair</LinkToGoOut>
          </TextHeader>

          <ProfileImg
            src="https://github.com/Brenobn.png"
            alt="Foto do usuário github"
          />
        </Profile>
      </HeaderWrapper>
    </Container>
  );
}
