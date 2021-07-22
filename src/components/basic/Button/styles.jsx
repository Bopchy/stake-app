import styled, { css } from "styled-components/macro";
import {
  PRIMARY_DARK,
  PRIMARY_INACTIVE,
  BORDER_INACTIVE,
  PRIMARY_DEFAULT,
  OFF_WHITE,
  BUTTON_DISABLED,
  GRAYSCALE_LABEL,
} from "../../../utils/colors";
import { POPPINS_SEMI_BOLDER } from "../../../utils/fonts";

export const buttonBase = css`
  ${POPPINS_SEMI_BOLDER}
  color: ${PRIMARY_DEFAULT};
  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.015625rem;
  background-color: ${PRIMARY_INACTIVE};
  height: 2.5rem;
  width: 3.0625rem;
  border-radius: 0.625rem;
  box-sizing: border-box;
  border: 0.0625rem solid ${BORDER_INACTIVE};
  cursor: pointer;
  padding: 0.625rem;
  position: absolute;
  z-index: 10;

  .selected {
    background-color: ${PRIMARY_DARK};
    color: ${OFF_WHITE};
  }
`;

export const submitButton = css`
  ${buttonBase}
  background-color: ${PRIMARY_DEFAULT};
  color: ${OFF_WHITE};
  font-size: 0.875rem;
  line-height: 1.625rem;
  width: 13.3125rem;
  height: 3.75rem;
  position: unset;

  &:disabled {
    background-color: ${BUTTON_DISABLED};
    color: ${PRIMARY_DEFAULT};
    border: 0.0625rem solid ${GRAYSCALE_LABEL};
  }
`;

export const Wrapper = styled.div`
  position: relative;

  button:active + span {
    transform: scale(1.3);
  }
`;

export const ActiveStyleTransform = styled.span`
  background-color: ${BORDER_INACTIVE};
  border: 0.0625rem solid transparent;
  box-sizing: border-box;
  border-radius: 0.625rem;
  height: 2.5rem;
  width: 3.0625rem;
  opacity: 0.9;
  position: absolute;
`;
