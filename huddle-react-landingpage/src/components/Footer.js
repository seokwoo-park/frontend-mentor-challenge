import React from "react";
import { Container } from "./styles/Container.styled";
import logoPath from "../assets/images/logo_white.svg";
import { Flex } from "./styles/Flex";
import { StyledFooter, IconWrapper } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

import locationPath from "../assets/images/icon-location.svg";
import phonePath from "../assets/images/icon-phone.svg";
import emailPath from "../assets/images/icon-email.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src={logoPath} alt="logo" />
        <Flex>
          <IconWrapper>
            <div>
              <img src={locationPath} alt="" />
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </div>

            <div>
              <img src={phonePath} alt="" />
              <li>+1-543-123-4567</li>
            </div>

            <div>
              <img src={emailPath} alt="" />
              <li>example@huddle.com</li>
            </div>
          </IconWrapper>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
