import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 2em 0;

  & > div,
  & > ul {
    flex: 1;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    color: ${({ theme }) => theme.color.black};
    margin: 1.5em 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 1.5em;
    text-align: center;

    h1 {
      font-size: 1.5rem;
    }
  }
`;
