import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 5px 16px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_500};

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
  }

`;