import { useState } from "react";
import { Link } from "react-router-dom";

import { GoArrowLeft, GoPlus } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

import {
  Container,
  ContentContainer,
  WayBack,
  Title,
  Col2,
  Section,
  Children,
  Buttons,
} from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function New() {
  const [tags, setTags] = useState([]);

  return (
    <Container>
      <Header />
      <ContentContainer>
        <WayBack>
          <GoArrowLeft />
          <Link to="/">Volar</Link>
        </WayBack>
        <Title>Novo filme</Title>
        <Col2>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </Col2>
        <textarea placeholder="Observações"></textarea>
        <Section>
          <h4>Marcadores</h4>
          <Children>
            <button>
              React
              <IoIosClose size={24} />
            </button>
            <button>
              Novo marcador
              <GoPlus />
            </button>
          </Children>
        </Section>
        <Buttons>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </Buttons>
      </ContentContainer>
    </Container>
  );
}
