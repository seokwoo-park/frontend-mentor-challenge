import styled from "styled-components";

export const StyledContent = styled.div`
  width: 80%;
  height: 25%;

  position: absolute;
  top: 25%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 2em;

  display: flex;
  justify-content: space-around;

  background-color: #fff;
  border-radius: 10px;

  z-index: 999;

  div {
    flex: 1;
    border-right: 1px solid ${({ theme }) => theme.color.DarkGray};
    margin: 0 0.5em;

    :last-child {
      border-right: none;
    }
  }

  p {
    color: ${({ theme }) => theme.color.DarkGray};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: 0.2em;
    font-size: 1rem;
  }

  h2 {
    color: ${({ theme }) => theme.color.VeryDarkGray};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 0.5em 0;
    font-size: 1.3rem;
  }
`;
