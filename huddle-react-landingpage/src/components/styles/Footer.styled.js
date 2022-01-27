import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.footerBg};
  color: #fff;
  padding: 4em 0;

  ul > li {
    width: 90%;
    margin-bottom: 1.5em;
    cursor: pointer;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    ul > li {
      width: 100%;
    }
  }
`;

export const IconWrapper = styled.ul`
  div {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      justify-content: center;
    }
  }

  img {
    width: 1.5em;
  }
`;
