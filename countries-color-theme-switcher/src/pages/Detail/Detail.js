import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Background,
  TextDesc,
  FlexBox,
} from "../../components/Reusable/index";
import { getCountryDetail } from "../../helpers/getCountryDetail";

const Detail = ({ darkMode }) => {
  const { countryID } = useParams();
  const [country, setCountry] = useState("");

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
          <FlexBox justify={"space-between"}>
            <h1>IMAGE</h1>
            <div className="CountryDetail">
              <h1>{country.name.official}</h1>

              <FlexBox align={"flex-start"} justify={"space-between"}>
                <div>
                  <TextDesc>
                    <span>Native Name: {}</span>
                    <p>H </p>
                  </TextDesc>
                  <TextDesc>
                    <span>Population:</span>
                    <p>{}</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Region:</span>
                    <p>D</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Sub Region:</span>
                    <p>H</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Capital:</span>
                    <p>e</p>
                  </TextDesc>
                </div>

                <div>
                  <TextDesc>
                    <span>Top Level Domain:</span>
                    <p>E</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Currencies:</span>
                    <p>J</p>
                  </TextDesc>
                  <TextDesc>
                    <span>Languages:</span>
                    <p>Y</p>
                  </TextDesc>
                </div>
              </FlexBox>
            </div>
          </FlexBox>
        ) : (
          <h1> Loading ...</h1>
        )}
      </Container>
    </Background>
  );
};

export default Detail;
