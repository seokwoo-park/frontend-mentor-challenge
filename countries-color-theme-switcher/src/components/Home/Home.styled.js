import styled from "styled-components";

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
    color: ${({ darkMode }) =>
      darkMode
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.lightModeText};

    ::placeholder {
      color: ${({ darkMode }) =>
        darkMode
          ? ({ theme }) => theme.color.white
          : ({ theme }) => theme.color.darkGray};
    }

    :focus {
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

export const RegionSearch = styled.div`
  position: relative;
  width: 15em;
  border-style: none;
  border-radius: 5px;
  padding: 1em;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.darkBlue
      : ({ theme }) => theme.color.white};

  color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.white
      : ({ theme }) => theme.color.lightModeText};
`;

export const RegionDropDown = styled.div`
  display: ${({ dropDownOn }) => (dropDownOn ? "flex" : "none")};
  position: absolute;
  top: 4em;
  left: 0;
  padding: inherit;
  width: inherit;
  flex-direction: column;
  gap: 1em;
  list-style: none;
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.small};
  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.darkBlue
      : ({ theme }) => theme.color.white};

  li {
    :hover {
      padding: 0.5em;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
