import React from "react";
import { StyledButton } from "../Reusable/Button.styled";
import { StyledHero } from "./Hero.styled";
import workingImg from "../../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed Insights on how your
          links are performing.
        </p>
        <StyledButton>Get Started</StyledButton>
      </div>

      <img src={workingImg} alt="working" />
    </StyledHero>
  );
};

export default Hero;
