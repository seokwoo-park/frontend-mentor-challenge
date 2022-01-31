import React from "react";
import logoPath from "../../assets/images/logo.svg";
import { StyledLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <>
      <StyledLogo src={logoPath} alt="logo" />
    </>
  );
};

export default Logo;
