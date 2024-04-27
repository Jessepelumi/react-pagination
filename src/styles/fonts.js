import { css } from "styled-components";

import SpaceGrotesk from "../fonts/SpaceGrotesk-Regular.ttf";

const spaceGroteskWeight = {
  400: SpaceGrotesk,
};

const spaceGrotesk = {
  name: "SpaceGrotesk",
  normal: spaceGroteskWeight,
};

const createFontFaces = (family, style = "normal") => {
  let styles = "";

  for (const [weight, format] of Object.entries(family[style])) {
    styles += `
        @font-face {
        font-family: '${family.name}';
        src: url(${format}) format('truetype');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
        }
        `;
  }

  return styles;
};

const spaceGroteskNormal = createFontFaces(spaceGrotesk);

const Fonts = css`
  ${spaceGroteskNormal}
`;

export default Fonts;