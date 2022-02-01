import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ width }) => width || "auto"};
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.color.cyan};
  border-radius: ${({ radius }) => (radius ? radius : "20px")};
  padding: ${({ padding }) => (padding ? padding : "0.5em 1em;")};
  color: #fff;
  font-weight: 700;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`;
