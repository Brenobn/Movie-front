import { MdStar, MdStarBorder } from 'react-icons/md';

import { Container } from "./styles";

export function Section({ children, description }) {
  return(
    <Container>
      <h2>Interestellar</h2>
      <div className='stars'>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStarBorder />
      </div>
      <p>
        {description}
      </p>

      {children}
    </Container>
  );
}