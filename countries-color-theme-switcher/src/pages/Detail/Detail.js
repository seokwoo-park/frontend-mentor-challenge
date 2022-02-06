import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Background,
  TextDesc,
  FlexBox,
} from "../../components/Reusable/index";
import { getCountryDetail } from "../../helpers/getCountryDetail";
import { StyledDetail } from "./Detail.styled";

const Detail = ({ darkMode }) => {
  const { countryID } = useParams();
  const [country, setCountry] = useState("");

  // console.log(Object.values(country.currencies));

  const getCurrencyValue = (object) => {
    const array = [];
    Object.values(object).forEach((element) => array.push(element.name));

    return array.join(", ");
  };

  console.log(country);
  useEffect(() => {
    const fetchDetail = async () => {
      const { data } = await getCountryDetail(countryID);
      setCountry(...data);
    };

    fetchDetail();
  }, []);

  return (
    <Background darkMode={darkMode}>
      <Container padding={"3% 5%"}>
        <button> Back </button>
        {country ? (
          <StyledDetail>
            <img src={country.flags.svg} alt={country.name.common + "flag"} />
            <FlexBox column="column" align="flex-start">
              <h1>{country.name.common}</h1>

              <FlexBox
                align={"flex-start"}
                justify={"space-between"}
                gap={"10%"}
                width={"100%"}
              >
                <div>
                  <TextDesc>
                    <span>Official Name: </span>
                    <p>{country.name.official} </p>
                  </TextDesc>
                  <TextDesc>
                    <span>Population: </span>
                    <p>{country.population.toLocaleString()}</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Region: </span>
                    <p>{country.region}</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Sub Region: </span>
                    <p>{country.subregion}</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Capital: </span>
                    <p>{country.capital || "Unknown"}</p>
                  </TextDesc>
                </div>

                <div>
                  <TextDesc>
                    <span>Top Level Domain: </span>
                    <p>{country.tld[0]}</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Currencies: </span>
                    <p>{getCurrencyValue(country.currencies)}</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Languages: </span>
                    <p>{Object.values(country.languages).join(", ")}</p>
                  </TextDesc>
                </div>
              </FlexBox>
              <TextDesc>
                <span>Border Countries: </span>
              </TextDesc>
            </FlexBox>
          </StyledDetail>
        ) : (
          <h1> Loading ...</h1>
        )}
      </Container>
    </Background>
  );
};

export default Detail;
