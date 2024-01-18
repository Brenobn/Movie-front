import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import { api } from "../../services/api";

import {
  Container,
  Content,
  WayBack,
  TagWrapper,
  Paragraph,
  StarsWrapper,
  Title,
} from "./styles";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { StarRating } from "../../components/StarRating";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movieNotes/${params.id}`);
      setData(response.data);
    }

    fetchMovies();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <WayBack>
              <GoArrowLeft />
              <ButtonText title="Voltar" to="/" />
            </WayBack>
            <StarsWrapper>
              <Title>{data.title}</Title>
              <StarRating numStar={data.rating} />
            </StarsWrapper>
            {data.tags && (
              <TagWrapper>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} text={tag.name} />
                ))}
              </TagWrapper>
            )}
            <Paragraph>{data.description}</Paragraph>
          </Content>
        </main>
      )}
    </Container>
  );
}
