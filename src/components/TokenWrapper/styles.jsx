import styled from "styled-components";
import { RegularText } from "../basic/Text";
import { GRAYSCALE_TITLE_ACTIVE } from "../../utils/colors";

export const Wrapper = styled.div`
  display: flex;
  width: 11.875rem;
  flex-direction: column;
  padding: 0.625rem 0.625rem 0.9375rem 0.625rem;
  background-color: ${GRAYSCALE_TITLE_ACTIVE};
  border: 1px solid transparent;
  border-radius: 0.625rem 0 0 0.625rem;
`;

export const Title = styled(RegularText)`
  text-align: left;
  margin: 0 0 0.375rem 0;
  text-transform: capitalize;
`;

export const ImageWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  img {
    width: 3.4375rem;
    height: 3.4375rem;
    border-radius: 0.625rem;
  }
`;
