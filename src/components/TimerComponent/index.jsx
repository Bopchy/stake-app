import React from "react";
import ProgressBar from "../basic/ProgressBar";
import { Wrapper, Timer } from "./styles";
import { Exp } from "../basic/Text";

const TimerComponent = ({
  name = "REVA",
  amountStaked = "0.00",
  timeLimit = "00.00.00",
}) => {
  return (
    <Wrapper>
      <Timer>
        <span>
          <p className="quantity">{amountStaked}</p>
          <Exp>{name} staked</Exp>
        </span>
        <span>
          <p className="quantity">{timeLimit}</p>
          <Exp>Time Left</Exp>
        </span>
      </Timer>
      <ProgressBar timeLimit={timeLimit} />
    </Wrapper>
  );
};

export default TimerComponent;
