import { Container, Paragraph } from "./styles";

export function Tag({ text }) {
  return (
    <Container>
      <Paragraph>{text}</Paragraph>
    </Container>
  );
}
