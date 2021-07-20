const POPPINS = `font-family: Poppins;`;

const getFontWeight = (weight) => `
font-style: normal;
font-weight: ${weight};
`;

export const POPPINS_REGULAR = `${POPPINS} ${getFontWeight(400)}`;
export const POPPINS_SEMI_BOLD = `${POPPINS} ${getFontWeight(500)}`;
export const POPPINS_SEMI_BOLDER = `${POPPINS} ${getFontWeight(600)}`;
export const POPPINS_BOLD = `${POPPINS} ${getFontWeight(700)}`;
