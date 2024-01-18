import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Content,
  ButtonHome,
  Sections,
  HeadOfPage,
  Title,
  TagsWrapper,
  Paragraph,
} from "./styles";

import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { StarRating } from "../../components/StarRating";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleChangeSearch(value) {
    setSearch(value);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movieNotes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header handleChange={handleChangeSearch} />
      <main>
        <Content>
          <HeadOfPage>
            <Title>Meus filmes</Title>

            <ButtonHome to="/new">
              <FiPlus />
              Adicionar filme
            </ButtonHome>
          </HeadOfPage>

          {movies.map((movie, index) => {
            return (
              <Sections key={index} onClick={() => handleDetails(movie.id)}>
                <Section title={movie.title}>
                  <StarRating numStar={movie.rating} />
                  <Paragraph>{movie.description}</Paragraph>
                  <TagsWrapper>
                    <Tag text="Ação" />
                    <Tag text="Aventura" />
                    <Tag text="Romance" />
                  </TagsWrapper>
                </Section>
              </Sections>
            );
          })}
        </Content>
      </main>
    </Container>
  );
}
