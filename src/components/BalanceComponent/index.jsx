import React from "react";
import styled from "styled-components";
import TokenWrapper from "./TokenWrapper";
import StakeBalance from "./StakeBalance";

// Images
import RevaultLogo from "../../assets/icons/revault_logo.svg"; // to be retrived via API

const Wrapper = styled.div`
  width: 100%;
  height: 6.875rem;
  display: flex;
  margin-bottom: 2.1875rem;
  box-sizing: border-box;
`;

const BalanceComponent = ({
  isStake,
  tokenImage = RevaultLogo,
  name = "REVA",
}) => {
  return (
    <Wrapper>
      <TokenWrapper
        action={isStake ? "Stake" : "UnStake"}
        tokenImage={tokenImage}
        name={name}
      />
      <StakeBalance isStake={isStake} name={name} />
    </Wrapper>
  );
};

export default BalanceComponent;
