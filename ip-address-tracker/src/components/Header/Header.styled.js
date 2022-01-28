import styled from "styled-components";
import bgPath from "../../assets/images/pattern-bg.png";

export const StyledHeader = styled.header`
  width: 100%;
  height: 35%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bgPath});

  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    }
  }
`;
