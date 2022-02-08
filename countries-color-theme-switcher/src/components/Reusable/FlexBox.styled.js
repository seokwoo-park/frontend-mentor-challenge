import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column || "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  gap: ${({ gap }) => gap || "0"};
  flex-wrap: wrap;
  width: ${({ width }) => width || "fit-content"};
  margin: ${({ margin }) => margin || "0"};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: ${({ mobileFlex }) => mobileFlex || "inherit"};
  }

  > div {
    flex: 1;
  }
`;
