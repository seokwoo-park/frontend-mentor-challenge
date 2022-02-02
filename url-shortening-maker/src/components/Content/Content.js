import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Container } from "..";
import { Wrapper } from "../Container/Wrapper.styled";
import { StyledBoostCard } from "../CTA/BoostCard.styled";
import { Shortenbar } from "../index";
import { StyledButton } from "../Reusable/Button.styled";
import {
  ContentText,
  CardLineBreak,
  CardContainer,
  CardWrapper,
  StyledContent,
  LinkCardWrapper,
} from "./Content.styled";

const data = [
  {
    header: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    image: "icon-brand-recognition.svg",
  },
  {
    header: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
    image: "icon-detailed-records.svg",
  },
  {
    header: "Fully Customizable",
    description:
      "Improved band awareness and content discoverability through customizable links, supercharging audience engagement",
    image: "icon-fully-customizable.svg",
  },
];

const Content = () => {
  const [shortLink, setShortLink] = useState([]);
  const [copiedURL, setCopiedURL] = useState("");

  const theme = useTheme();

  const copyClick = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedURL(url);
  };

  return (
    <>
      <StyledContent>
        <Container>
          <Wrapper height="5em">
            <Shortenbar setShortLink={setShortLink} />
          </Wrapper>

          {shortLink.map((item, index) => (
            <LinkCardWrapper key={index}>
              <h3>{item.original_link}</h3>
              <hr />
              <a href={item.full_short_link} target={"_blank"}>
                {item.full_short_link}
              </a>

              {item.full_short_link === copiedURL ? (
                <StyledButton
                  onClick={() => copyClick(item.full_short_link)}
                  radius="5px"
                  width="100%"
                  style={{
                    backgroundColor: theme.color.darkViolet,
                  }}
                >
                  Copied !
                </StyledButton>
              ) : (
                <StyledButton
                  onClick={() => copyClick(item.full_short_link)}
                  width="100%"
                  radius="5px"
                >
                  Copy
                </StyledButton>
              )}
            </LinkCardWrapper>
          ))}

          <ContentText>
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </ContentText>

          <CardContainer>
            {data.map((data, index) => (
              <CardWrapper key={index}>
                <img
                  src={require(`../../assets/images/${data.image}`)}
                  alt={data.header}
                />
                <h3>{data.header}</h3>
                <p>{data.description}</p>
              </CardWrapper>
            ))}
            <CardLineBreak />
          </CardContainer>
        </Container>
      </StyledContent>

      <StyledBoostCard>
        <h3>Boost your link today</h3>
        <StyledButton>Get Started</StyledButton>
      </StyledBoostCard>
    </>
  );
};

export default Content;
