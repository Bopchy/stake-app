import React from "react";
import PropTypes from "prop-types";
import { Exp } from "../basic/Text";
import { Wrapper, OptionSpecs, DetailQuantity, Divider } from "./styles";

const BoostOptionDetails = ({ apy, powerShare, daysLock }) => {
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
        <Exp>DAYS LOCK</Exp>
      </OptionSpecs>
    </Wrapper>
  );
};

BoostOptionDetails.defaultProps = {
  apy: PropTypes.string.isRequired,
  powerShare: PropTypes.string.isRequired,
  daysLock: PropTypes.string.isRequired,
};

export default BoostOptionDetails;
