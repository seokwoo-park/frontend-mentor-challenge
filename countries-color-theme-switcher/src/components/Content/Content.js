import React from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import { TextDesc } from "../Reusable/index";
import {
  CardWrapper,
  LoadingSpinner,
  StyledContent,
  TextWrapper,
} from "./Content.styled";

const Content = ({ currentCountry, darkMode }) => {
  const navigate = useNavigate();

  return (
    <StyledContent>
      {currentCountry ? (
        currentCountry.map(
          (
            {
              name: { common },
              flags: { svg },
              population,
              region,
              capital,
              cca3,
            },
            index
          ) => (
            <CardWrapper onClick={() => navigate(`detail/${cca3}`)} key={index}>
              <img src={svg} alt={common + " flags"} />
              <TextWrapper darkMode={darkMode}>
                <h2>{common}</h2>
                <TextDesc>
                  <span>Population: </span>
                  <p>{population.toLocaleString()}</p>
                </TextDesc>
                <TextDesc>
                  <span>Region: </span>
                  <p> {region}</p>
                </TextDesc>
                <TextDesc>
                  <span>Capital: </span>
                  <p> {capital ? capital[0] : "Unknown"}</p>
                </TextDesc>
              </TextWrapper>
            </CardWrapper>
          )
        )
      ) : (
        <LoadingSpinner darkMode={darkMode}>
          <Oval
            height="100"
            width="100"
            color={darkMode ? "white" : "grey"}
            secondaryColor={darkMode ? "grey" : "blue"}
            ariaLabel="Loading ..."
          />
          <h3>Loading</h3>
        </LoadingSpinner>
      )}
    </StyledContent>
  );
};

export default Content;
