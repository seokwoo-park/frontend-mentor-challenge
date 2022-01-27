import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
