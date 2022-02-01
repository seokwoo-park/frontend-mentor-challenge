import styled from "styled-components";

export const StyledContent = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  margin-top: 15%;
  background-color: ${({ theme }) => theme.color.gray};
  text-align: center;
`;

export const ContentText = styled.div`
  margin: 10% 0;
  h1 {
    font-size: 2rem;
  }
  p {
    color: ${({ theme }) => theme.color.grayishViolet};
    width: 40%;
    margin: 0 auto;
    line-height: 1.5em;
    font-weight: 400;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2em;
  width: 100%;
  height: 20em;

  div:first-child {
    align-self: flex-start;
  }
  div:nth-child(2) {
    align-self: center;
  }
  div:nth-child(3) {
    align-self: flex-end;
  }
`;

export const CardLineBreak = styled.hr`
  position: absolute;
  bottom: 50%;
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.cyan};
  border-style: none;
`;

export const CardWrapper = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  padding: 1.5em;
  text-align: left;
  height: 17em;
  flex: 1;
  z-index: 999;

  img {
    position: absolute;
    top: -10%;
    width: 3em;
    padding: 2px;
    background-color: ${({ theme }) => theme.color.darkViolet};
    border-radius: 100%;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    line-height: 1.3rem;
  }
`;

export const LinkCardWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 0.5em 2em;
  margin-bottom: 1em;
  background-color: #fff;
  border-radius: 10px;

  h3 {
    font-weight: 400;
    flex: 2 2 0;
    text-align: left;
  }

  a {
    flex: 1 1 0;
    color: ${({ theme }) => theme.color.cyan};
    text-decoration: none;

    :hover {
      font-weight: 600;
    }
  }
`;
