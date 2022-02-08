import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import {
  Container,
  Background,
  TextDesc,
  FlexBox,
  Button,
} from "../../components/Reusable/index";
import { getCountryDetail } from "../../helpers/getCountryDetail";
import { StyledDetail } from "./Detail.styled";

const Detail = ({ darkMode, allCountry }) => {
  const { countryID } = useParams();
  const [country, setCountry] = useState("");
  const [borderCountry, setBorderCountry] = useState("");

  const navigate = useNavigate();

  const getCurrencyValue = (object) => {
    const array = [];
    Object.values(object).forEach((element) => array.push(element.name));

    return array.join(", ");
  };

  useEffect(() => {
    const fetchDetail = async () => {
      const { data } = await getCountryDetail(countryID);
      setCountry(...data);
    };

    fetchDetail();
  }, [countryID]);

  useEffect(() => {
    if (allCountry && country) getBorderData();
  }, [country, allCountry]);

  const getBorderData = () => {
    let array = [];

    if (country.borders) {
      country.borders.map((item) => {
        array.push(allCountry.find((element) => element.cca3 === item));
      });
      setBorderCountry(array);
    } else {
      return null;
    }
  };

  return (
    <Background darkMode={darkMode}>
      <Container padding={"3% 5%"}>
        <Button
          onClick={() => navigate("/")}
          darkMode={darkMode}
          margin={"3em 0"}
        >
          <FlexBox gap={"0.5em"}>
            <i>
              <BsArrowLeft />
            </i>
            Back
          </FlexBox>
        </Button>

        {country ? (
          <StyledDetail darkMode={darkMode}>
            <img src={country.flags.svg} alt={country.name.common + "flag"} />
            <FlexBox column="column" align="flex-start" mobileFlex={"column"}>
              <h1>{country.name.common}</h1>

              <FlexBox
                align={"flex-start"}
                justify={"space-between"}
                gap={"2em"}
                width={"100%"}
                // mobileFlex={"column"}
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
                    <p>{country.tld[0] || "Unknown"}</p>
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
                <FlexBox gap={"0.5em"} margin={"2em"}>
                  <span>Border Countries: </span>
                  {borderCountry ? (
                    borderCountry.map((item, index) => (
                      <Button
                        darkMode={darkMode}
                        key={index}
                        onClick={() => navigate(`/detail/${item.cca3}`)}
                      >
                        {item.name.common}
                      </Button>
                    ))
                  ) : (
                    <Button onClick={() => navigate("/")} darkMode={darkMode}>
                      No border country around
                    </Button>
                  )}
                </FlexBox>
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
