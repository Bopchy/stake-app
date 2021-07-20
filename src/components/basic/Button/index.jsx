import React from "react";
import styled from "styled-components";
import {
  PRIMARY_DARK,
  PRIMARY_INACTIVE,
  BORDER_INACTIVE,
  PRIMARY_DEFAULT,
  OFF_WHITE,
} from "../../../utils/colors";
import { POPPINS_SEMI_BOLDER } from "../../../utils/fonts";

const Wrapper = styled.div`
  position: relative;

  button:active + span {
    transform: scale(1.3);
  }
`;

const ButtonComponent = styled.button`
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

  .submit-button {
  }
`;

const ActiveStyleTransform = styled.span`
  background-color: ${BORDER_INACTIVE};
  border: 0.0625rem solid transparent;
  box-sizing: border-box;
  border-radius: 0.625rem;
  height: 2.5rem;
  width: 3.0625rem;
  opacity: 0.9;
  position: absolute;
`;

const Button = ({ children, onClick, type = "button", className, ...rest }) => (
  <Wrapper>
    <ButtonComponent
      onClick={onClick}
      type={type}
      className={className}
      {...rest}
    >
      {children}
    </ButtonComponent>
    <ActiveStyleTransform />
  </Wrapper>
);

export default Button;
