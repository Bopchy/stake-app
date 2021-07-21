import React from "react";
import styled from "styled-components";
import { Exp, RegularText } from "../basic/Text";
import {
  PRIMARY_DEFAULT,
  GRAYSCALE_LABEL,
  GRAYSCALE_BODY,
  PANEL_DARK,
} from "../../utils/colors";
import { POPPINS_REGULAR, POPPINS_SEMI_BOLDER } from "../../utils/fonts";

const BalanceWrapper = styled.div`
  background-color: ${PANEL_DARK};
  display: flex;
  flex-direction: column;
  width: 15.625rem;
  padding: 0.75rem 0.625rem 1.25rem 0.625rem;
  border: 0.0625rem solid transparent;
  border-radius: 0 0.625rem 0.625rem 0;
  text-align: right;

  .stakeAmount {
    text-align: right;
    margin: 0;
  }
`;

const Header = styled(Exp)`
  letter-spacing: 0.015625rem;
  line-height: 1.25rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.875rem;

  .action {
    color: ${PRIMARY_DEFAULT};
    text-align: left;
  }

  .balance {
    color: ${GRAYSCALE_LABEL};
    text-align: right;
  }
`;

const Input = styled.input`
  ${POPPINS_REGULAR}
  font-size: 1.25rem;
  line-height: 2rem;
  color: ${GRAYSCALE_BODY};
  outline: none;
  border: none;
  background-color: transparent;
  text-align: right;
`;

const UnstakeOptions = styled.span`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button.attrs(() => ({
  type: "button",
}))`
  ${POPPINS_SEMI_BOLDER}
  font-size: 0.75rem;
  line-height: 1.25rem;
  margin-bottom: 0.625rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${GRAYSCALE_BODY};
  width: 2.1875rem;
  letter-spacing: 0.015625rem;
  cursor: pointer;
`;

const StakeBalance = ({
  isStake,
  name = "REVA",
  stakeAmount = "0.00",
  balanceAmount = "0.00",
}) => {
  return (
    <BalanceWrapper>
      {isStake ? (
        <Header>
          <span className="action">GET</span>
          <span className="balance">
            {name} Balance: {balanceAmount}
          </span>
        </Header>
      ) : (
        <UnstakeOptions>
          <Button>10%</Button>
          <Button>25%</Button>
          <Button>50%</Button>
          <Button>75%</Button>
          <Button>100%</Button>
        </UnstakeOptions>
      )}

      <Input name="stake-amount" type="text" value="0.00" />
      <RegularText className="stakeAmount">${stakeAmount}</RegularText>
    </BalanceWrapper>
  );
};

export default StakeBalance;
