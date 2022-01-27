import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo, HeaderImage } from "./styles/Header.styled";
import { Flex } from "./styles/Flex";
import { Button } from "./styles/Button.styled";

import logoPath from "../assets/images/logo.svg";
import imagePath from "../assets/images/illustration-mockups.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logoPath} alt="Huddle logo" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button
              bg={({ theme }) => theme.color.pink}
              fontColor={({ theme }) => theme.color.white}
            >
              Get Started For Free
            </Button>
          </div>

          <HeaderImage src={imagePath} alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
