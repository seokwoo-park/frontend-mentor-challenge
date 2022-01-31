import React from "react";
import { StyledButton } from "../Reusable/Button.styled";
import { Signbar, StyledMenu, StyledNav } from "./Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </StyledMenu>

      <Signbar>
        <li>Login</li>
        <StyledButton>Sign up</StyledButton>
      </Signbar>
    </StyledNav>
  );
};

export default Nav;
