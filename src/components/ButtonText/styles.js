import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: none;
  color: ${({ theme }) => theme.COLORS.SALMON};

  border: none;
  font-size: 16px;

  display: inline-flex;
  gap: 8px;
`;

// export const ButtonWithDefaultHref = styled.a.attrs({
//   href: "###"
// })

// <ButtonWithDefaultHref /> // <a href="####"
