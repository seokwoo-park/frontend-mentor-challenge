import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <h1>IP Address Tracker</h1>
      <Searchbar placeholder={"Search for any IP address or domain"} />
    </StyledHeader>
  );
};

export default Header;
