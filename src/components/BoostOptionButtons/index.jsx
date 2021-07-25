import React from "react";
import Button from "../basic/Button";
import { Wrapper, Hr, ButtonContainer } from "./styles";

const BoostOptionButtons = ({ onClick }) => {
  return (
    <Wrapper>
      <Hr />
      <ButtonContainer>
        <Button variant="xoption" onClick={() => onClick(0)}>
          X1
        </Button>
        <Button variant="xoption" onClick={() => onClick(1)}>
          X2
        </Button>
        <Button variant="xoption" onClick={() => onClick(2)}>
          X3
        </Button>
        <Button variant="xoption" onClick={() => onClick(3)}>
          X4
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default BoostOptionButtons;
