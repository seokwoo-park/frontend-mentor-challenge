import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 7%;
  width: 100vw;

  h1 {
    width: 60%;
    font-size: 4rem;
    margin-bottom: 0;
  }

  p {
    width: 60%;
  }

  img {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    padding: 1em;

    overflow-x: hidden;
    flex-direction: column-reverse;
    text-align: center;

    h1 {
      font-size: 2.5rem;
      width: 100%;
    }

    p {
      width: 100%;
      line-height: 1.3rem;
      font-size: 1.1rem;
    }

    img {
      padding-left: 0;
      margin: 1em 0;
      width: 100%;
      margin-left: 50%;
      transform: scale(1.2);
    }
  }
`;
