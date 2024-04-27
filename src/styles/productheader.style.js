import styled from "styled-components";
import header_image from "../image/header_image.jpeg";
import header_image_mobile from "../image/header_image_mobile.jpeg";
import { media } from "./breakpoints";

export const StyledProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("${header_image}");
  background-size: cover;
  height: 500px;
  width: 100%;
  color: white;

  section {
    padding-bottom: 50px;
    h1 {
      font-weight: bold;
      font-size: 30px;
    }
  }

  ${media.lg`
  background-image: url("${header_image_mobile}");
  `}

  ${media.md`
  background-image: url("${header_image_mobile}");
  `}
`;
