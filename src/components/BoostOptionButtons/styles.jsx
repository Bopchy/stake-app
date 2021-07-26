import styled, { css } from "styled-components/macro";
import { buttonBase } from "../../components/basic/Button/styles";
import { PRIMARY_DARK, BORDER_INACTIVE, OFF_WHITE } from "../../utils/colors";

export const Wrapper = styled.div`
  position: relative;
  display: block;
  height: 2.5rem;
  box-sizing: border-box;
  margin-bottom: 2.1875rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  box-sizing: border-box;
  top: 25%;

  label {
    ${buttonBase}
    padding: 10px 16.5px;
    position: unset;
    text-transform: uppercase;
  }

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  input[type="radio"]:checked + label {
    background-color: ${PRIMARY_DARK};
    color: ${OFF_WHITE};
    box-shadow: 0 0 0 5px ${BORDER_INACTIVE};
  }
`;

export const Hr = styled.span`
  border: 1px solid ${PRIMARY_DARK};
  width: 98%;
  display: block;
  box-sizing: border-box;
  top: 50%;
  position: absolute;
  opacity: 0.4;
`;
