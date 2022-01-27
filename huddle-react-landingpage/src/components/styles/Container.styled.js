import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  padding: 0 3em;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 1.5em;
  }
`;
