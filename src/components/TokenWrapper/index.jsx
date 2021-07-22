import React from "react";
import { MediumText } from "../basic/Text";
import { Wrapper, Title, ImageWrapper } from "./styles";

const TokenWrapper = ({ action, tokenImage, name }) => (
  <Wrapper>
    <Title>
      {action} {name}
    </Title>
    <ImageWrapper>
      <img src={tokenImage} alt="token" />
      <MediumText>{name}</MediumText>
    </ImageWrapper>
  </Wrapper>
);

export default TokenWrapper;
