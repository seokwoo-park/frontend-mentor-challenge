import styled from "styled-components";

export const Background = styled.div`
  min-height: 90vh;
  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.veryDarkBlue
      : ({ theme }) => theme.color.veryLightGray};
`;
