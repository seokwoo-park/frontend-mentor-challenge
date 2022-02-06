import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column || "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  gap: ${({ gap }) => gap || "0"};
`;
