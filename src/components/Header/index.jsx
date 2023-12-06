import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <div className="header-wrapper">
        <h1>RocketMovies</h1>

        <Input placeholder="Pesquisar pelo título" />

        <Profile>
          <div className="text">
            <strong>Breno Braga</strong>
            <a href="#">sair</a>
          </div>

          <img 
            src="https://github.com/Brenobn.png" 
            alt="Foto do usuário github" 
          />
        </Profile>
      </div>

    </Container>
  );
}