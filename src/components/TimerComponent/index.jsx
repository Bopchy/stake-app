import React from "react";
import styled from "styled-components";
import Range from "../basic/Range";

const Wrapper = styled.div`
  display: flex;
`;

const TimerComponent = ({ name = "REVA", amountStaked, timeLimit }) => {
  return (
    <>
      <Wrapper>
        <div>
          <p>{amountStaked}</p>
          <p>{name} staked</p>
        </div>
        <div>
          <p>0.00.00</p>
          <p>TIME LEFT</p>
        </div>
      </Wrapper>
      <Range />
    </>
  );
};

export default TimerComponent;
