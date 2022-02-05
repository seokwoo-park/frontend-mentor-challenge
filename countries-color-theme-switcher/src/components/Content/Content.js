import React from "react";

import { Oval } from "react-loader-spinner";

import {
  CardWrapper,
  LoadingSpinner,
  StyledContent,
  TextWrapper,
} from "./Content.styled";

const Content = ({ currentCountry, darkMode }) => {
  return (
    <StyledContent>
      {currentCountry ? (
        currentCountry.map(
          (
            { name: { common }, flags: { svg }, population, region, capital },
            index
          ) => (
            <CardWrapper key={index}>
              <img src={svg} alt={common + " flags"} />
              <TextWrapper darkMode={darkMode}>
                <h2>{common}</h2>
                <p> {population.toLocaleString()}</p>
                <p> {region}</p>
                <p> {capital ? capital[0] : "Unknown"}</p>
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
