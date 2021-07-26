import styled from "styled-components";
import { GRAYSCALE_BODY, OFF_WHITE } from "../../utils/colors";
import { RegularText } from "../basic/Text";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
`;

export const Divider = styled.span`
  transform: rotate(180deg);
  height: 2.5rem;
  border: 1px solid ${GRAYSCALE_BODY};
`;

export const OptionSpecs = styled.span`
  text-align: center;
`;

export const DetailQuantity = styled(RegularText)`
  font-size: 1.625rem;
  line-height: 2.4375rem;
  margin: 0;
  text-transform: capitalize;
  color: ${OFF_WHITE};
`;
