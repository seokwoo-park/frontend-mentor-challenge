import React from "react";
import { BsSearch } from "react-icons/bs";
import { Container } from "../Reusable/Container.styled";
import { Content } from "../index";
import {
  StyledHome,
  SearchContainer,
  SearchBar,
  SearchOption,
} from "./Home.styled";

const Home = ({ darkMode, currentCountry }) => {
  return (
    <StyledHome darkMode={darkMode}>
      <Container padding={"3% 5%"}>
        <SearchContainer>
          <SearchBar darkMode={darkMode}>
            <i>
              <BsSearch />
            </i>
            <input type={"text"} placeholder="Search by Name ..." />
          </SearchBar>
          <SearchOption darkMode={darkMode}>
            <option value="" hidden>
              Search by Region
            </option>
            <option value="1">Africa</option>
            <option value="2">America</option>
            <option value="3">Asia</option>
            <option value="4">Europe</option>
            <option value="5">Oceania</option>
          </SearchOption>
        </SearchContainer>

        <Content darkMode={darkMode} currentCountry={currentCountry} />
      </Container>
    </StyledHome>
  );
};

export default Home;
