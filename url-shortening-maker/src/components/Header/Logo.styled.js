import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 15%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 70%;
  }
`;
