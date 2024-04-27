import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: var(--font-custom);
    font-weight: 400;
    line-height: 1.5;
}
`;

export default GlobalStyle;
