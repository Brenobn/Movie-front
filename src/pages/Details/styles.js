import styled from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  max-height: 1024px;
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  .Sections {
      display: inline-flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      width: 100%;
    }

    .TagsWrapper {
      display: flex;
      gap: 8px;
      margin-top: 15px;
    }

  .headofpage {
    display: flex;
    justify-content: space-between;
    gap: 710px;
    margin: 50px 170px 40px 190px;


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
      padding: 30px;
      
      margin: 13px 32px 13px 52px;
    }
  }
`;
