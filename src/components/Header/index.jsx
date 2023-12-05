import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input />

      <Profile>
        <img 
          src="https://github.com/Brenobn.png" 
          alt="Foto do usuário github" 
        />

        <div>
          <strong>Breno Braga</strong>
          <a href="#">sair</a>
        </div>
      </Profile>

    </Container>
  );
}