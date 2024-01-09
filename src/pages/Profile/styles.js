import styled from "styled-components";

export const Container = styled.div`
  max-height: 840px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-template-rows: 144px auto;
  grid-template-areas:
    "header"
    "content";

  form {
    width: 340px;
    height: 336px;
    flex-shrink: 0;

    margin: 157px 501px 203px 525px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    > div:nth-child(3) {
      margin-top: 16px;
    }
  }
`;

export const Header = styled.header`
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.COLORS.BROWN_100};

  div {
    margin: 64px 1226px 59px 168px;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    > svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
  }

  a {
    color: ${({ theme }) => theme.COLORS.SALMON};
    font-family: "Roboto Slab", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  .Picture {
    margin: -91px 596px 603px 596px;

    img {
      width: 186px;
      height: 186px;
      flex-shrink: 0;

      border-radius: 93px;

      position: relative;
    }

    label {
      background-color: ${({ theme }) => theme.COLORS.SALMON};
      width: 48px;
      height: 48px;

      margin: 134px 4px 4px 128px;
      border-radius: 50%;
      position: absolute;

      cursor: pointer;

      > svg {
        flex-shrink: 0;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        margin: 14px 14px;
      }

      input {
        display: none;
      }
    }
  }
`;
