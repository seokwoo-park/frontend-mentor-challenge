import React, { useState } from "react";
import { StyledHeader, StyledSearchbar } from "./Header.styled";
import iconPath from "../../assets/images/icon-arrow.svg";

import { getLocation } from "../../helpers/getLocation";

const Header = ({ setSearchData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      await getLocation(inputValue)
        .then(
          ({
            data: {
              ip,
              isp,
              location: { country, region, city, timezone, lat, lng },
            },
          }) =>
            setSearchData({
              ip,
              isp,
              country,
              region,
              city,
              timezone,
              lat,
              lng,
            })
        )
        .catch((Error) => alert("Invalid IP Address. Check again"));
      setInputValue("");
    }
  };

  const handleButtonClick = async () => {
    await getLocation(inputValue)
      .then(
        ({
          data: {
            ip,
            isp,
            location: { country, region, city, timezone },
          },
        }) => setSearchData({ ip, isp, country, region, city, timezone })
      )
      .catch((Error) => alert("Invalid IP address. Check again"));
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <StyledHeader>
      <h1>IP Address Tracker</h1>
      <StyledSearchbar>
        <input
          placeholder="Search for any IP address"
          onChange={handleChange}
          onKeyDown={handleEnter}
          value={inputValue}
          type="search"
        />

        <button onClick={handleButtonClick}>
          <img src={iconPath} alt="search button" />
        </button>
      </StyledSearchbar>
    </StyledHeader>
  );
};

export default Header;
