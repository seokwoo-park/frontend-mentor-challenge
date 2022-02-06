import React, { useState } from "react";
import { BsSearch, BsFillCaretDownFill } from "react-icons/bs";
import { Container, Background } from "../Reusable/index";
import { Content } from "../index";
import {
  SearchContainer,
  SearchBar,
  RegionSearch,
  RegionDropDown,
} from "./Home.styled";
import { getRegion } from "../../helpers/getRegion";

const Home = ({ darkMode, allCountry, currentCountry, setCurrentCountry }) => {
  const [dropDownOn, setDropDownOn] = useState(false);

  const getRegionData = async (e) => {
    const region = e.target.innerText.toLowerCase();
    const { data } = await getRegion(region);
    setCurrentCountry(data);
  };

  const getNameSearch = (value) => {
    const inputValue = value.toLowerCase();
    if (allCountry) {
      const result = allCountry.filter(({ name: { common } }) =>
        common.toLowerCase().includes(inputValue)
      );
      setCurrentCountry(result);
    }
  };

  return (
    <Background darkMode={darkMode}>
      <Container padding={"3% 5%"}>
        <SearchContainer>
          <SearchBar darkMode={darkMode}>
            <i>
              <BsSearch />
            </i>
            <input
              onChange={(e) => getNameSearch(e.target.value)}
              type={"text"}
              placeholder="Search by Name ..."
            />
          </SearchBar>

          <RegionSearch
            onClick={() => setDropDownOn((prev) => !prev)}
            darkMode={darkMode}
          >
            <p>Search by Region</p>
            <i>
              <BsFillCaretDownFill />
            </i>
            <RegionDropDown
              onClick={getRegionData}
              dropDownOn={dropDownOn}
              darkMode={darkMode}
            >
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </RegionDropDown>
          </RegionSearch>
        </SearchContainer>

        <Content darkMode={darkMode} currentCountry={currentCountry} />
      </Container>
    </Background>
  );
};

export default Home;
