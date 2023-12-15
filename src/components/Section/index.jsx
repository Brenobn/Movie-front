import { MdStar, MdStarBorder } from "react-icons/md";

import { Container, Stars, Paragraph, Title } from "./styles";

export function Section({ children, description }) {
  return (
    <Container to="/details/5">
      <Title>Interestellar</Title>
      <Stars>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStarBorder />
      </Stars>
      <Paragraph>{description}</Paragraph>

      {children}
    </Container>
  );
}
