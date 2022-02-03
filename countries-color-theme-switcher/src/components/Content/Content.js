import React from "react";
import { CardWrapper, StyledContent, TextWrapper } from "./Content.styled";

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
        <h1>Loading</h1>
      )}
    </StyledContent>
  );
};

export default Content;
