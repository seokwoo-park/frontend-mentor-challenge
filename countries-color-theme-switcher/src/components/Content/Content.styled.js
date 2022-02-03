import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: center;
    gap: 2em;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20em;
  height: 25em;
  margin: 3% 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 50%;
    aspect-ratio: 16/10;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const TextWrapper = styled.div`
  padding: 1em 1em;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: ${({ darkMode }) =>
    darkMode
      ? ({ theme }) => theme.color.darkBlue
      : ({ theme }) => theme.color.white};

  h2 {
    font-size: 1.3rem;
    margin-bottom: 1em;

    color: ${({ darkMode }) =>
      darkMode
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.lightModeText};
  }

  p {
    color: ${({ darkMode }) =>
      darkMode
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.lightModeText};

    margin-bottom: 1em;
  }
  p:nth-child(2),
  p:nth-child(3),
  p:nth-child(4) {
    ::before {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }
  p:nth-child(2) {
    ::before {
      content: "Population: ";
    }
  }
  p:nth-child(3) {
    ::before {
      content: "Region: ";
    }
  }
  p:last-child {
    ::before {
      content: "Capital: ";
    }
  }
`;
