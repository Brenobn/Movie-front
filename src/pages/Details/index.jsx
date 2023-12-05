import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";
 
import { Button } from "../../components/Button";

export function Details() {
  return(
    <Container>
      <div className="headofpage">
        <h1>Meus filmes</h1>

        <Button icon={FiPlus} title="Adicionar filme" />

      </div>
    </Container>
  );
}