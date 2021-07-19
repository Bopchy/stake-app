import React from "react";
import styled from "styled-components";
import Button from "../basic/Button";

const OptionWrapper = styled.div`
  display: flex;
`;

const OptionContainer = styled.div``;

const OptionSpecs = styled.span`
  display: flex;
`;

const StakeOptions = ({
  apy = "120.3%",
  powerShare = "silver",
  daysLock = "7",
}) => {
  return (
    <OptionWrapper>
      <OptionContainer>
        <OptionSpecs>
          <span>{apy}</span>
          <p>REVA APY</p>
        </OptionSpecs>
        <OptionSpecs>
          <span>{powerShare}</span>
          <p>POWER SHARE</p>
        </OptionSpecs>
        <OptionSpecs>
          <span>{daysLock}</span>
          <p>DAY LOCK</p>
        </OptionSpecs>
      </OptionContainer>
      <OptionContainer>
        <Button>X1</Button>
        <Button>X2</Button>
        <Button>X3</Button>
        <Button>X4</Button>
      </OptionContainer>
    </OptionWrapper>
  );
};

export default StakeOptions;
