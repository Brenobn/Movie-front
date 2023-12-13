import styled from "styled-components";

export const Container = styled.div`

  width: 340px;
  height: 100vh;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.SALMON};
    font-family: 'Roboto Slab', sans-serif;
    font-size: 48px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto Slab', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_110};
    font-family: 'Roboto Slab', sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  .InputWrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > Button {
    margin-top: 24px;
    margin-bottom: 42px;
  }
`;
