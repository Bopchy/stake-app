import React from "react";
import styled from "styled-components";
import XDetails from "./XDetails";
import XButtons from "./XButtons";

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StakeOptions = ({}) => {
  return (
    <OptionWrapper>
      <XDetails />
      <XButtons />
    </OptionWrapper>
  );
};

export default StakeOptions;
