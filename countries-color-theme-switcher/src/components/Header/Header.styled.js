import styled from "styled-components";

export const StyledHeader = styled.header`
  /* width: 90%; */
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.darkBlue
      : ({ theme }) => theme.color.white};
  h1 {
    color: ${({ darkMode }) =>
      darkMode
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.lightModeText};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const DarkMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding: 1em;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ darkMode }) =>
      darkMode
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.lightModeText};
  }

  i {
    color: ${({ darkMode }) =>
      darkMode ? ({ theme }) => theme.color.white : "initial"};
  }
`;
