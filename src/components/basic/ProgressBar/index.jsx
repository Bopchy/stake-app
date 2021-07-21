import React from "react";
import styled from "styled-components";
import { PROGRESS_BAR } from "../../../utils/colors";

const Bar = styled.div`
  progress[value] {
    width: 25rem;
    height: 0.625rem;
    -webkit-appearance: none;
    appearance: none;
  }

  // Webkit
  progress[value]::-webkit-progress-bar {
    background-color: ${PROGRESS_BAR};
    border-radius: 3.125rem;
  }
  progress[value]::-webkit-progress-value {
    background: linear-gradient(126.66deg, #5f2eea 14.36%, #972eea 99.39%);
    border-radius: 3.125rem;
  }

  // Moz
  progress[value]::-moz-progress-bar {
    background-color: ${PROGRESS_BAR};
    border-radius: 3.125rem;
  }
  progress[value]::-moz-progress-value {
    background: linear-gradient(126.66deg, #5f2eea 14.36%, #972eea 99.39%);
    border-radius: 3.125rem;
  }
`;

const ProgressBar = ({ timeLimit }) => {
  return (
    <Bar>
      <progress value="10" max="100"></progress>
    </Bar>
  );
};

export default ProgressBar;
