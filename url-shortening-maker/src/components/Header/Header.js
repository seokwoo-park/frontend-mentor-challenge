import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { BurgerIcon, LineBreak, StyledHeader } from "./Header.styled";
import { StyledBurgerMenu } from "../Reusable/BurgerMenu.styled";
import { StyledButton } from "../Reusable/Button.styled";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isMenuOn, setIsMenuOn] = useState(false);

  return (
    <>
      <StyledHeader>
        <Logo />
        <Nav />

        <BurgerIcon onClick={() => setIsMenuOn(!isMenuOn)}>
          <AiOutlineMenu />
        </BurgerIcon>
      </StyledHeader>

      <StyledBurgerMenu style={{ display: isMenuOn ? "flex" : "none" }}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <LineBreak />
        <ul>
          <li>Login</li>
          <StyledButton width={"100%"}>Sign Up</StyledButton>
        </ul>
      </StyledBurgerMenu>
    </>
  );
};

export default Header;
