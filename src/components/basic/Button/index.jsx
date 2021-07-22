import React from "react";
import { css } from "styled-components/macro"; // eslint-disable-no-unused-vars
import {
  buttonBase,
  submitButton,
  Wrapper,
  ActiveStyleTransform,
} from "./styles";

const getButtonStyles = (variant) => {
  if (variant === "xoption") {
    return buttonBase;
  }
  return submitButton;
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant,
  className,
  ...rest
}) => (
  <Wrapper>
    <button
      onClick={onClick}
      type={type}
      css={getButtonStyles(variant)}
      className={className}
      {...rest}
    >
      {children}
    </button>
    {variant === "xoption" && <ActiveStyleTransform />}
  </Wrapper>
);

export default Button;
