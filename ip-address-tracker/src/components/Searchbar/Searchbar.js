import React from "react";
import { StyledSearchbar } from "./Searchbar.styled";
import iconPath from "../../assets/images/icon-arrow.svg";

const Searchbar = ({ placeholder }) => {
  return (
    <StyledSearchbar>
      <input type="search" placeholder={placeholder} />
      <button>
        <img src={iconPath} alt="search button" />
      </button>
    </StyledSearchbar>
  );
};

export default Searchbar;
