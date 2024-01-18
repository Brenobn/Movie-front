import { useState } from "react";
import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function StarRating({ resize = 20, numStar = 0, ...rest }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            onClick={() => setHover(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {index <= numStar ? (
              <AiFillStar size={resize} />
            ) : (
              <AiOutlineStar size={resize} />
            )}
          </span>
        );
      })}
    </Container>
  );
}
