import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 6px;

  > span {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;
