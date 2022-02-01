import styled from "styled-components";
import inputBG from "../../assets/images/bg-shorten-desktop.svg";

export const StyledShortenbar = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2em;
  background-color: ${({ theme }) => theme.color.darkViolet};
  background-image: url(${inputBG});
  margin: 0 auto;
  gap: 1em;
  border-radius: 10px;

  :focus-within label {
    display: block;
  }

  input {
    width: 100%;
    height: 2em;
    border-style: none;
    border-radius: 5px;
    padding: 1.5em;
    flex: 3 3 0;

    :focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.color.red};

      ::placeholder {
        color: ${({ theme }) => theme.color.red};
      }
    }
  }

  button {
    flex: 1 1 0;
  }

  label {
    position: absolute;
    bottom: 8%;
    left: 10%;
    display: none;
    color: ${({ theme }) => theme.color.red};
    font-style: italic;
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    padding: 1em;
    gap: 2em;
    top: -140%;
    input {
      width: 100%;
    }

    button {
      width: 100%;
    }

    label {
      top: 45%;
    }
  }
`;
