import React from "react";
import { css } from "styled-components/macro"; // eslint-disable-no-unused-vars
import { submitButton, Wrapper } from "./styles";

const Button = ({ children, onClick, type = "button", className, ...rest }) => (
  <Wrapper>
    <button
      onClick={onClick}
      type={type}
      css={submitButton}
      className={className}
      {...rest}
    >
      {children}
    </button>
  </Wrapper>
);

export default Button;
