import styled from "styled-components";
import { media } from "./breakpoints";

export const StyledProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3%;
  padding: 100px;

  ${media.lg`
  grid-template-columns: repeat(2, 1fr);
  padding: 60px;
  `}

  ${media.md`
  grid-template-columns: 1fr;
  gap: 1%;
  padding: 30px;
  `}
`;
