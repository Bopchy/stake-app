import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 3fr 0.25fr;
  height: 100vh;

  #main {
    width: 40.25rem;
    justify-self: center;
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
