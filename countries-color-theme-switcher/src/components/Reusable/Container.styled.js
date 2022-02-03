import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ padding }) => (padding ? padding : "0")};
`;
