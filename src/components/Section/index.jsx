import { useState } from "react";

import { MdStar, MdStarBorder } from "react-icons/md";

import { Container, Stars, Paragraph, Title } from "./styles";

export function Section({
  children,
  description,
  title,
  resize = 20,
  numStars = 0,
  ...rest
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <Container to="/details/5">
      <Title>{title}</Title>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Stars
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {index <= numStars ? (
              <MdStar size={resize} />
            ) : (
              <MdStarBorder size={resize} />
            )}
          </Stars>
        );
      })}
      <Paragraph>{description}</Paragraph>

      {children}
    </Container>
  );
}
