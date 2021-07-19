import React from "react";
import StakeOptions from "../StakeOptions";
import BalanceComponent from "../BalanceComponent";
import TimerComponent from "../TimerComponent";

const StakeComponent = ({}) => {
  return (
    <>
      <h2>Select you boost power</h2>
      <StakeOptions />
      <BalanceComponent />
      <TimerComponent />
    </>
  );
};

export default StakeComponent;
