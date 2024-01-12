import { useState } from "react";

import {
  Container,
  Content,
  ButtonHome,
  Sections,
  HeadOfPage,
  Title,
  TagsWrapper,
} from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <HeadOfPage>
            <Title>Meus filmes</Title>

            <ButtonHome to="/new">
              <FiPlus />
              Adicionar filme
            </ButtonHome>
          </HeadOfPage>

          <Sections>
            <Section
              description={` Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.
              ...
              Cooper e Amelia descobrem que 23 anos se passaram.`}
            >
              <TagsWrapper>
                <Tag text="Ação" />
                <Tag text="Aventura" />
                <Tag text="Romance" />
              </TagsWrapper>
            </Section>

            <Section
              description={` Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.
              ...
              Cooper e Amelia descobrem que 23 anos se passaram.`}
            >
              <TagsWrapper>
                <Tag text="Ação" />
                <Tag text="Aventura" />
                <Tag text="Romance" />
              </TagsWrapper>
            </Section>

            <Section
              description={` Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.
              ...
              Cooper e Amelia descobrem que 23 anos se passaram.`}
            >
              <TagsWrapper>
                <Tag text="Ação" />
                <Tag text="Aventura" />
                <Tag text="Romance" />
              </TagsWrapper>
            </Section>
          </Sections>
        </Content>
      </main>
    </Container>
  );
}
