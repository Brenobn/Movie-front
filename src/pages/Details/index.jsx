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
        <Section 
          description={` Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.
          ...
          Cooper e Amelia descobrem que 23 anos se passaram.`} 
        >
          <div className="TagsWrapper">
          <Tag text="Ação" />
          <Tag text="Aventura" />
          <Tag text="Romance" />
          </div>
        </Section>

        
      </div>
    </Container>
  );
}