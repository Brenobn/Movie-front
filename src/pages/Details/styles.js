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
  max-width: 1137px;

  margin: 40px auto;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const WayBack = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;

export const LinkToGoOut = styled.a`
  color: ${({ theme }) => theme.COLORS.SALMON};
  text-align: center;
  font-family: "Roboto Slab", sans-serif;
  font-size: 16px;
  font-weight: 400;

  svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;

export const TagWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: justify;
  font-family: "Roboto Slab", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const StarsWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h1`
  margin-right: 19px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: "Roboto Slab", sans-serif;
  font-size: 36px;
  font-weight: 500;
`;
