import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button``;

const Button = ({ children, buttonType }) => (
  <ButtonComponent buttonType={buttonType}>{children}</ButtonComponent>
);

export default Button;
