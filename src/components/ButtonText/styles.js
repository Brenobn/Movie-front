import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.SALMON};

  border: none;
  font-size: 16px;

  display: inline-flex;
  gap: 8px;
`;