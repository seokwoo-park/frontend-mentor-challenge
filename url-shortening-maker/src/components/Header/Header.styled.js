import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: space-between;
  }
`;

export const LineBreak = styled.hr`
  border-style: none;
  background-color: ${({ theme }) => theme.color.gray};
  height: 1px;
  width: 100%;
`;

export const BurgerIcon = styled.div`
  display: none;

  transform: scale(1.5);

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: block;

    color: ${({ theme }) => theme.color.grayishViolet};
  }
`;
