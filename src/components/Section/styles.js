import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  width: 77%;
  padding: 32px;
  flex-direction: column;
  margin-right: 20px;
  align-items: flex-start;
  gap: 15px;

  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.BROWN_100};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: "Roboto Slab", sans-serif;
  font-size: 24px;
  font-weight: 700;
`;
