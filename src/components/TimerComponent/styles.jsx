import styled from "styled-components";
import { GRAYSCALE_DARK, GRAYSCALE_BODY } from "../../utils/colors";
import { POPPINS_REGULAR } from "../../utils/fonts";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${GRAYSCALE_DARK};
  border: 0.0625rem solid trasparent;
  border-radius: 0.625rem;
  padding: 0.625rem 1.25rem;
  margin-bottom: 2.1875rem;
`;

export const Timer = styled.div`
  display: flex;
  gap: 1.875rem;
  align-self: center;
  margin-bottom: 0.9375rem;

  span {
    text-align: center;
  }

  .quantity {
    ${POPPINS_REGULAR}
    font-size: 1.625rem;
    line-height: 2.4375rem;
    color: ${GRAYSCALE_BODY};
    margin: 0;
  }
`;
