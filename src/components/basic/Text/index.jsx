import styled from "styled-components/macro";
import {
  POPPINS_BOLD,
  POPPINS_REGULAR,
  POPPINS_SEMI_BOLD,
  POPPINS_SEMI_BOLDER,
} from "../../../utils/fonts";
import { OFF_WHITE, GRAYSCALE_LABEL } from "../../../utils/colors";

export const H3Header = styled.h3`
  ${POPPINS_BOLD}
  color: ${OFF_WHITE};
  font-size: 2rem;
  line-height: 2.5rem;
  text-transform: capitalize;
  text-align: center;
  margin: 0 0 0.3125rem 0;
`;

export const H5Header = styled.h5`
  ${POPPINS_BOLD}
  color: ${OFF_WHITE};
  text-align: center;
  font-size: 1.25rem;
  line-height: 2.1875rem;
  padding: 0 0 0.625rem 0;
`;

export const H6Header = styled.h6`
  ${POPPINS_BOLD}
  color: ${OFF_WHITE};
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 2.4375rem 0;
`;

export const RegularText = styled.p`
  ${POPPINS_REGULAR}
  color: ${GRAYSCALE_LABEL};
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  margin: 0 0 1.25rem 0;
`;

export const MediumText = styled.p`
  ${POPPINS_SEMI_BOLDER}
  color: ${OFF_WHITE};
  font-size: 1rem;
  line-height: 1.75rem;
  margin: 0;
`;

export const Exp = styled.p`
  ${POPPINS_SEMI_BOLD}
  color: ${GRAYSCALE_LABEL};
  font-size: 0.75rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  margin: 0;
`;
