import styled from "styled-components";
import { PRIMARY_DARK } from "../../utils/colors";

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
