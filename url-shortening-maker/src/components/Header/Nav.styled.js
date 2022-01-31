import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    color: ${({ theme }) => theme.color.grayishViolet};
    font-weight: 700;
    cursor: pointer;
    list-style: none;

    :hover {
      color: #000;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: end;
  }
`;

export const StyledMenu = styled.ul`
  display: flex;
  gap: 1em;
  color: ${({ theme }) => theme.color.grayishViolet};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

export const Signbar = styled.ul`
  display: flex;
  align-items: center;
  gap: 1em;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;
