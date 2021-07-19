import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 440px;
  display: inline-block;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const BalanceWrapper = styled.div`
  display: flex;
`;

const PercentageWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;

const StakeBalance = ({ name, stakeAmount }) => {
  return (
    <Fragment>
      <p>GET</p>
      <p>{name} Balance</p>
      <input name="stake-amount" />
      <p>${stakeAmount}</p>
    </Fragment>
  );
};

const UnstakeBalance = ({ name, stakeAmount }) => {
  return (
    <Fragment>
      <PercentageWrapper>
        <button>10%</button>
        <button>25%</button>
        <button>50%</button>
        <button>75%</button>
        <button>100%</button>
      </PercentageWrapper>
      <input name="unstake-amount" />
      <p>${stakeAmount}</p>
    </Fragment>
  );
};

const BalanceComponent = ({ name }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <span>Stake {name}</span>
      </IconWrapper>
      <BalanceWrapper>
        {
          // check whether stake or unstake, then render right component
          <StakeBalance name={name} />
        }
      </BalanceWrapper>
    </Wrapper>
  );
};

export default BalanceComponent;
