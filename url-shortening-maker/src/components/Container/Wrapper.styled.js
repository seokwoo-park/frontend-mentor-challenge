import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: ${({ height }) => (height ? height : "100%")};
`;
