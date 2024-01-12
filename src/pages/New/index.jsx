import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { GoArrowLeft, GoPlus } from "react-icons/go";

import { api } from "../../services/api";

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
import { NoteItem } from "../../components/NoteItem";

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (newTag) {
      return alert(
        "Você esqueceu de adicionar uma tag! Adicione a tag ou deixe o campo vazio.",
      );
    }

    await api.post("/movieNotes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Filme cadastrado com sucesso!");
    navigate("/");
  }

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
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            onChange={(e) => setRating(e.target.value)}
          />
        </Col2>
        <textarea
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <Section>
          <h4>Marcadores</h4>
          <Children>
            {tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Children>
        </Section>
        <Buttons>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" onClick={handleNewMovie} />
        </Buttons>
      </ContentContainer>
    </Container>
  );
}
