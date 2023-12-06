import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 85%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  border-radius: 16px;
  background: ${({ theme }) => theme.COLORS.BROWN_100};

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto Slab', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  .stars {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }
`;