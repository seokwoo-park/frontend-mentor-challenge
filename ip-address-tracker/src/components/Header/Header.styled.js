import styled from "styled-components";
import bgPath from "../../assets/images/pattern-bg.png";

export const StyledHeader = styled.header`
  width: 100%;
  height: 35%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bgPath});

  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const StyledSearchbar = styled.div`
  display: flex;
  width: 25em;

  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 90%;
  }

  input {
    width: 100%;
    height: 3em;

    padding: 1.5em;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: none;

    opacity: 1;
    outline: none;

    ::placeholder {
      color: ${({ theme }) => theme.color.DarkGray};
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      height: 3.5em;
    }
  }

  button {
    width: 10%;
    height: 3em;
    cursor: pointer;
    border: none;
    background-color: #000;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

    :hover {
      background-color: ${({ theme }) => theme.color.DarkGray};
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      height: 3.5em;
    }
  }
`;
