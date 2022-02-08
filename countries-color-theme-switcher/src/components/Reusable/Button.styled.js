import styled from "styled-components";

export const Button = styled.button`
  background-color: red;
  border-style: none;
  padding: 0.5em 2em;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin: ${({ margin }) => margin || "0"};

  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.darkBlue
      : ({ theme }) => theme.color.white};

  color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.white
      : ({ theme }) => theme.color.lightModeText};
`;
