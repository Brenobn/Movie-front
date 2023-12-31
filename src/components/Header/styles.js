import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};

  display: flex;
  justify-content: space-between;

  padding: 23px 123px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Text = styled.h1`
  color: ${({ theme }) => theme.COLORS.SALMON};
  font-family: "Roboto Slab", sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 123px;
  align-items: center;
  gap: 64px;
`;

export const TextHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Name = styled(Link)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: "Roboto Slab", sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`;

export const ProfileImg = styled.img`
  width: 64px;
  height: 64px;

  border-radius: 35px;
  border: 1px solid #3e3b47;
`;

export const LinkToGoOut = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: "Roboto Slab", sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const Profile = styled.div`
  display: inline-flex;
  height: 68px;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
`;
