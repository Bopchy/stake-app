import React from "react";
import styled from "styled-components";
import { RegularText, Exp } from "../basic/Text";
import { GRAYSCALE_BODY } from "../../utils/colors";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
`;

const Divider = styled.span`
  transform: rotate(180deg);
  height: 2.5rem;
  border: 1px solid ${GRAYSCALE_BODY};
`;

const OptionSpecs = styled.span`
  text-align: center;
`;

const DetailQuantity = styled(RegularText)`
  font-size: 1.625rem;
  line-height: 2.4375rem;
  margin: 0;
  text-transform: capitalize;
`;

const XDetails = ({
  apy = "120.3%",
  powerShare = "silver",
  daysLock = "7",
}) => (
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

export default XDetails;
