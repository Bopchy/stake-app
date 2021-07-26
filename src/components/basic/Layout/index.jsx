import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 3fr 0.25fr;
  height: 100%;
  border: 0.0625rem solid red;
  border-radius: 0.625rem;
  box-sizing: border-box;

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
