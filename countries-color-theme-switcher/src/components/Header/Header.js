import React from "react";
import { DarkMode, StyledHeader } from "./Header.styled";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {
  const darkModeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StyledHeader darkMode={darkMode}>
      <h1> Where in the world?</h1>

      <DarkMode onClick={darkModeClick} darkMode={darkMode}>
        <i>{darkMode ? <BsSunFill /> : <BsMoonFill />}</i>
        <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </DarkMode>
    </StyledHeader>
  );
};

export default Header;
