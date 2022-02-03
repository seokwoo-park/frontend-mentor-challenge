import React from "react";
import { DarkMode__Wrapper, StyledHeader } from "./Header.styled";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {
  const darkModeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StyledHeader darkMode={darkMode}>
      <h1> Where in the world?</h1>

      <DarkMode__Wrapper onClick={darkModeClick} darkMode={darkMode}>
        <i>{darkMode ? <BsMoonFill /> : <BsMoon />}</i>
        <p>Dark Mode</p>
      </DarkMode__Wrapper>
    </StyledHeader>
  );
};

export default Header;
