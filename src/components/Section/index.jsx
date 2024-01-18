import { Container, Title } from "./styles";

export function Section({ children, title, ...rest }) {
  return (
    <Container to="/details/5">
      <Title>{title}</Title>

      {children}
    </Container>
  );
}
