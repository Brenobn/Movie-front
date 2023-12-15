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

export const Stars = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;

  > svg:nth-child(1) {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > svg:nth-child(2) {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > svg:nth-child(3) {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > svg:nth-child(4) {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > svg:nth-child(5) {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;

  overflow: hidden;
  text-overflow: ellipsis;
`;
