import styled from "styled-components";

export const Container = styled.div`
  max-width: 893px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

`;

export const ContentContainer = styled.div`
  max-width: 1137px;
  max-height: 581px;

  margin: 40px auto;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: inline-flex;
  padding-right: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  .WayBack {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    a {
      color: ${({ theme }) => theme.COLORS.SALMON};
      text-align: center;
      font-family: 'Roboto Slab', sans-serif;
      font-size: 16px;
      font-weight: 400;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
  }


  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto Slab', sans-serif;
    font-size: 36px;
    font-weight: 500; 
  }

  .TagWrapper {
    display: inline-flex;
    align-items: flex-start;
    gap: 8px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;