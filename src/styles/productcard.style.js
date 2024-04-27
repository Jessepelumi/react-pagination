import styled from "styled-components";

export const StyledProductCard = styled.div`
background-color: var(--white);
  img {
    width: 100%;
  }
  
  section {
    padding: 20px;
    p {
      font-size: 12px;
      padding-bottom: 20px;
    }
    aside {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 20px;
        font-weight: bold;
      }
      button {
        background-color: var(--blue);
        color: var(--white);
        outline: none;
        border: none;
        padding: 10px;
        &:hover {
          background-color: var(--transparent);
          color: var(--blue);
          border: 1px solid var(--blue);
        }
      }
    }
  }
`;
