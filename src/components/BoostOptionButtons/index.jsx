import React from "react";
import Button from "../basic/Button";
import { Wrapper, Hr, ButtonContainer } from "./styles";

const BoostOptionButtons = ({ onClick }) => {
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

export default BoostOptionButtons;
