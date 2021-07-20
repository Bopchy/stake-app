import React from "react";
import styled from "styled-components";
import { Exp, RegularText } from "../basic/Text";
import {
  PRIMARY_DEFAULT,
  GRAYSCALE_LABEL,
  GRAYSCALE_BODY,
} from "../../utils/colors";
import { POPPINS_REGULAR } from "../../utils/fonts";

const Wrapper = styled.div`
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

const StakeBalance = ({
  name = "REVA",
  stakeAmount = "0.00",
  balanceAmount = "0.00",
}) => {
  return (
    <Wrapper>
      <Header>
        <span className="action">GET</span>
        <span className="balance">
          {name} Balance: {balanceAmount}
        </span>
      </Header>
      <Input name="stake-amount" type="text" value="0.00" />
      <RegularText className="stakeAmount">${stakeAmount}</RegularText>
    </Wrapper>
  );
};

export default StakeBalance;
