import React from "react";
import styled from "styled-components";
import { RegularText, MediumText } from "../basic/Text";
import { GRAYSCALE_TITLE_ACTIVE } from "../../utils/colors";

const Wrapper = styled.div`
  display: flex;
  width: 11.875rem;
  height: 6.875rem;
  flex-direction: column;
  padding: 0.625rem 0.625rem 0.9375rem 0.625rem;
  background-color: ${GRAYSCALE_TITLE_ACTIVE};
  box-sizing: border-box;
  border: 1px solid transparent;
  border-top-left-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
`;

const Title = styled(RegularText)`
  text-align: left;
  margin: 0 0 0.375rem 0;
`;

const ImageWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  img {
    width: 3.4375rem;
    height: 3.4375rem;
    border-radius: 0.625rem;
  }
`;

const TokenWrapper = ({ tokenImage, name }) => (
  <Wrapper>
    <Title>Stake {name}</Title>
    <ImageWrapper>
      <img src={tokenImage} alt="token" />
      <MediumText>{name}</MediumText>
    </ImageWrapper>
  </Wrapper>
);

export default TokenWrapper;
