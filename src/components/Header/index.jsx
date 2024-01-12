import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

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

export function Header({ handleChange }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <HeaderWrapper>
        <Text>RocketMovies</Text>

        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => handleChange(e.target.value)}
        />

        <Profile>
          <TextHeader>
            <Name to="/profile">{user.name}</Name>
            <LinkToGoOut onClick={signOut}>sair</LinkToGoOut>
          </TextHeader>

          <ProfileImg src={avatarUrl} alt={user.name} />
        </Profile>
      </HeaderWrapper>
    </Container>
  );
}
