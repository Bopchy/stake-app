import React from "react";
import styled from "styled-components";
import { GRAYSCALE_LABEL } from "../../../utils/colors";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 3fr 0.25fr;
  height: 100%;
  border: 0.0625rem solid ${GRAYSCALE_LABEL};
  border-radius: 0.625rem;
  box-sizing: border-box;
  background: -webkit-radial-gradient(
    bottom right,
    rgba(61, 0, 162, 0.75),
    transparent,
    #09090e
  );

  #main {
    width: 40.25rem;
    justify-self: center;
    min-height: 83.5vh;
  }
`;

const Layout = ({ children }) => (
  <Grid>
    <div id="header"></div>
    <div id="main">{children}</div>
    <div id="footer"></div>
  </Grid>
);

export default Layout;
