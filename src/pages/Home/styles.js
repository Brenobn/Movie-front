import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    height: calc(100vh - 116px);
    
    width: 100%;
  }

  
`;

export const Content = styled.div`
  max-width: 1366px;
  max-height: 1024px;

  margin: 50px auto;

  display: flex;
  flex-direction: column;
  gap: 40px;

  .Sections {
      display: inline-flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      margin: 40px auto;
      
    }

    .TagsWrapper {
      display: flex;
      gap: 8px;
      margin-top: 15px;
    }

    .headofpage {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 400px;
      
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
    }
  }
`;