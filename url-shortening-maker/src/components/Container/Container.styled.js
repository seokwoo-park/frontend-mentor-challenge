import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  padding: ${({ padding }) => (padding ? padding : "3% 7%")};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-top: 10%;
  }
`;
