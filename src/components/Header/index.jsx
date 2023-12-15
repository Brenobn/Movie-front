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
  return (
    <Container>
      <HeaderWrapper>
        <Text>RocketMovies</Text>

        <Input placeholder="Pesquisar pelo título" />

        <Profile to="/profile">
          <TextHeader>
            <Name>Breno Braga</Name>
            <LinkToGoOut href="#">sair</LinkToGoOut>
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
