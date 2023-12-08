import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";
`;

export const ContentContainer = styled.div`
  width: 1137px;
  display: flex;
  flex-direction: column;
  padding: 0px 24px 16px 0px;
  align-items: flex-start;
  gap: 40px;
  margin: 40px auto;

  .WayBack {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    a {
      color: ${({ theme }) => theme.COLORS.SALMON};
      text-align: center;
      font-family: 'Roboto Slab';
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

  .Col2 {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    align-self: stretch;
  }

  textarea {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    height: 274px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    padding: 19px 16px;

    border-radius: 10px;
    border: none;
  }

  .children {
    display: flex;
    width: 1113px;
    height: auto;
    align-items: flex-start;
    padding: 16px;
    gap: 24px;
    align-self: stretch;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > button:nth-child(1) {
      display: inline-flex;
      padding: 16px;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      
      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;
      border-radius: 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

      svg {
        color: ${({ theme }) => theme.COLORS.SALMON};
      }
    }

    > button:nth-child(2) {
      display: inline-flex;
      padding: 16px;
      flex-direction: row;
      align-items: center;
      background: transparent;
      gap: 16px;

      border-color: ${({ theme }) => theme.COLORS.GRAY_200};
      border-style: dashed;
      border-width: 2px;
      border-radius: 10px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};

      svg {
        color: ${({ theme }) => theme.COLORS.SALMON};
      }
    }
  }
`;

