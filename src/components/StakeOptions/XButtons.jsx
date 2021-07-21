import React from "react";
import styled from "styled-components";
import Button from "../basic/Button";
import { PRIMARY_DARK } from "../../utils/colors";

const Wrapper = styled.div`
  position: relative;
  height: 2.5rem;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const Hr = styled.span`
  border: 1px solid ${PRIMARY_DARK};
  width: 98%;
  display: block;
  box-sizing: border-box;
  top: 50%;
  position: absolute;
  opacity: 0.4;
`;

const XButtons = () => {
  return (
    <Wrapper>
      <Hr />
      <ButtonContainer>
        <Button variant="xoption">X1</Button>
        <Button variant="xoption">X2</Button>
        <Button variant="xoption">X3</Button>
        <Button variant="xoption">X4</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default XButtons;
