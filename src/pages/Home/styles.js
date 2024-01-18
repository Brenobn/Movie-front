import styled from "styled-components";

import { Link } from "react-router-dom";

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
`;

export const HeadOfPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 400px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: "Roboto Slab", sans-serif;
  font-size: 32px;
  font-weight: 400;
`;

export const Sections = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  margin: 40px auto;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 15px;
`;

export const ButtonHome = styled(Link)`
  display: inline-flex;
  height: 48px;
  width: 207px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding: 30px;

  height: 56px;
  border: 0;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.SALMON};
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  &:disabled {
    opacity: 0.5;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;

  overflow: hidden;
  text-overflow: ellipsis;
`;
