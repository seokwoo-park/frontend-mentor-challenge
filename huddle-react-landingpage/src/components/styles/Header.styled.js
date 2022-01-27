import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.headerBg};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 1.5em;
    margin-top: 0.5em;
  }
`;

export const HeaderImage = styled.img`
  width: 45%;
  margin-left: 1em;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Logo = styled.img``;
