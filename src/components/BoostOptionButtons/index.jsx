import React from "react";
import { Wrapper, Hr, ButtonContainer } from "./styles";

const BoostOptionButtons = ({ onChange, options }) => {
  return (
    <Wrapper>
      <Hr />
      <ButtonContainer>
        {options.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                id={`x${index + 1}`}
                name="boost-options"
                value={index}
                onClick={() => onChange(index)}
                defaultChecked={index === 0}
              />
              <label htmlFor={`x${index + 1}`}>{`x${index + 1}`}</label>
            </div>
          );
        })}
      </ButtonContainer>
    </Wrapper>
  );
};

export default BoostOptionButtons;
