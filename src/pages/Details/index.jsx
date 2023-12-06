import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";
 
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return(
    <Container>
      <Header />

      <div className="headofpage">
        <h1>Meus filmes</h1>

        <Button icon={FiPlus} title="Adicionar filme" />

      </div>

      <div className="Sections">
        <Section >
          <Tag text="Ação" />
        </Section>

        
      </div>
    </Container>
  );
}