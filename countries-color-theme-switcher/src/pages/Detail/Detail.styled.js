import styled from "styled-components";

export const StyledDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5%;

  h1,
  span,
  p {
    color: ${({ darkMode }) =>
      darkMode
        ? ({ theme }) => theme.color.white
        : ({ theme }) => theme.color.lightModeText};
  }

  img {
    width: 20em;
    /* height: 10em; */
    aspect-ratio: 16/10;
    object-fit: cover;
    flex: 1;
  }

  > div {
    flex: 1;
  }
`;
