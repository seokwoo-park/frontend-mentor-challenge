import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  gap: 2em;
  margin: 2em 0;
  padding: 3em;

  flex-direction: ${({ layout }) => layout || "row"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 1.5em;
  }

  img {
    width: 80%;
    max-width: 100%;
    object-fit: contain;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 0 auto;
      width: 100%;
    }
  }

  h2 {
    font-size: 2rem;
    margin: 0.5em 0;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
    }
  }

  p {
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.9rem;
    }
  }
`;
