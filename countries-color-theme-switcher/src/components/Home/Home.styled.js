import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.veryDarkBlue
      : ({ theme }) => theme.color.veryLightGray};
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    gap: 1em;
    margin-bottom: 2em;
  }
`;

export const SearchBar = styled.div`
  border-radius: 5px;
  padding: 1em 2em;
  display: flex;
  font-size: 1rem;

  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.darkBlue
      : ({ theme }) => theme.color.white};

  input {
    width: 30em;
    background-color: transparent;
    border-style: none;
    margin-left: 1em;

    ::placeholder {
      color: ${({ darkMode }) =>
        darkMode
          ? ({ theme }) => theme.color.white
          : ({ theme }) => theme.color.darkGray};
    }

    :focus {
      color: ${({ darkMode }) =>
        darkMode
          ? ({ theme }) => theme.color.white
          : ({ theme }) => theme.color.lightModeText};
      outline: none;
    }
  }

  i {
    color: ${({ darkMode }) =>
      darkMode
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.darkGray};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    gap: 1em;

    input {
      width: 15em;
    }
  }
`;

export const SearchOption = styled.select`
  width: 15em;
  border-style: none;
  border-radius: 5px;
  padding: 1em;
  font-size: 1rem;

  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.darkBlue
      : ({ theme }) => theme.color.white};

  color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.white
      : ({ theme }) => theme.color.lightModeText};

  option {
    border-style: none;
  }
`;
