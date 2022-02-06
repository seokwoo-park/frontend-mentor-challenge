import styled from "styled-components";

export const TextDesc = styled.div`
  margin: ${({ margin }) => (margin ? margin : "1em 0")};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    display: inline;
  }
`;
