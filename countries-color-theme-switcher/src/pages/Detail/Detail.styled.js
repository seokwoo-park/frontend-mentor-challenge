import styled from "styled-components";

export const StyledDetail = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
  flex-wrap: wrap;
  gap: 5%;

  img {
      width: 40%;
    object-fit : cover;
    flex: 1;
  }
  
  >div {
      flex: 1;
      /* width: 100%; */
  }


`;
