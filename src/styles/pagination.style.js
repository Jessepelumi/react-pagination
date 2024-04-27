import styled from "styled-components";

export const StyledPagination = styled.nav`
  display: flex;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    a {
      padding: 15px;
      text-decoration: none;
      color: black;
      cursor: pointer;
      &:hover {
        color: blue;
      }
    }
  }
`;
