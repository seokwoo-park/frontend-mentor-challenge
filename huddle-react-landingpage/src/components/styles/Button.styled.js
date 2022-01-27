import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 1em 3.5em;

  font-weight: 700;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ fontColor }) => fontColor || "#000"};

  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
  }
`;
