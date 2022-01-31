import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    background-color: ${({ theme }) => theme.color.darkViolet};
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 1em;
    margin: 10% 0;
    height: 60vh;
    border-radius: 20px;

    ul {
      width: 100%;
      padding-inline-start: 0;
      list-style: none;
      color: #fff;
      text-align: center;

      li {
        margin: 1em 0;
        font-size: 1.3rem;
        font-weight: 600;
      }
    }
  }
`;
