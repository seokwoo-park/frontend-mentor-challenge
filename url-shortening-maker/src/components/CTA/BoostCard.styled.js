import styled from "styled-components";

import boostBg from "../../assets/images/bg-boost-desktop.svg";

export const StyledBoostCard = styled.div`
  background-color: ${({ theme }) => theme.color.darkViolet};
  background-image: url(${boostBg});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  width: 100vw;
  text-align: center;
  height: 10em;

  h3 {
    color: #fff;
    margin: 0;
    font-size: 2rem;
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 1.5rem;
    }
  }
`;
