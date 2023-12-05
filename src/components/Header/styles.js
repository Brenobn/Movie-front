import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};

  display: flex;
  justify-content: space-around;

  padding: 23px 123px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`;

export const Profile = styled.div`
  display: inline-flex;
  height: 68px;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;

  > strong {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto Slab', sans-serif;
    font-size: 14px;
    font-weight: 700;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: 'Roboto Slab', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  > img {
    width: 64px;
    height: 64px;

    border-radius: 35px;
    border: 1px solid #3e3b47;
  }
`;