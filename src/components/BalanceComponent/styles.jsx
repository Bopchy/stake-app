import styled from "styled-components";
import { Exp } from "../basic/Text";
import {
  PRIMARY_DEFAULT,
  GRAYSCALE_LABEL,
  GRAYSCALE_BODY,
  PANEL_DARK,
} from "../../utils/colors";
import { POPPINS_REGULAR, POPPINS_SEMI_BOLDER } from "../../utils/fonts";

export const Wrapper = styled.div`
  width: 100%;
  height: 6.875rem;
  display: flex;
  margin-bottom: 2.1875rem;
  box-sizing: border-box;
`;

export const BalanceWrapper = styled.div`
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

export const Header = styled(Exp)`
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

export const Input = styled.input`
  ${POPPINS_REGULAR}
  font-size: 1.25rem;
  line-height: 2rem;
  color: ${GRAYSCALE_BODY};
  outline: none;
  border: none;
  background-color: transparent;
  text-align: right;
`;

export const UnstakeOptions = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button.attrs(() => ({
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
