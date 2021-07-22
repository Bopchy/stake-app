import React from "react";
import { Exp } from "../basic/Text";
import { Wrapper, OptionSpecs, DetailQuantity, Divider } from "./styles";

const BoostOptionDetails = ({
  apy = "120.3%",
  powerShare = "silver",
  daysLock = "7",
}) => {
  return (
    <Wrapper>
      <OptionSpecs>
        <DetailQuantity>{apy}</DetailQuantity>
        <Exp>REVA APY</Exp>
      </OptionSpecs>
      <Divider />
      <OptionSpecs>
        <DetailQuantity>{powerShare}</DetailQuantity>
        <Exp>POWER SHARE</Exp>
      </OptionSpecs>
      <Divider />
      <OptionSpecs>
        <DetailQuantity>{daysLock}</DetailQuantity>
        <Exp>DAY LOCK</Exp>
      </OptionSpecs>
    </Wrapper>
  );
};

export default BoostOptionDetails;
