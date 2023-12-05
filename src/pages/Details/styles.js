import styled from "styled-components";

export const Container = styled.div`
  .headofpage {
    display: flex;
    justify-content: space-between;
    gap: 746px;
    margin: 50px 106px 40px 123px;


    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: 'Roboto Slab', sans-serif;
      font-size: 32px;
      font-weight: 400;
    }

    > button {
      display: inline-flex;
      height: 48px;
      width: 207px;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;

    }
  }
`;