import { createGlobalStyle } from "styled-components";
import Poppin400Woff from "./assets/fonts/poppins-v15-latin-regular.woff";
import Poppin500Woff from "./assets/fonts/poppins-v15-latin-500.woff";
import Poppin600Woff from "./assets/fonts/poppins-v15-latin-600.woff";
import Poppin700Woff from "./assets/fonts/poppins-v15-latin-700.woff";
import Poppin400Woff2 from "./assets/fonts/poppins-v15-latin-regular.woff2";
import Poppin500Woff2 from "./assets/fonts/poppins-v15-latin-500.woff2";
import Poppin600Woff2 from "./assets/fonts/poppins-v15-latin-600.woff2";
import Poppin700Woff2 from "./assets/fonts/poppins-v15-latin-700.woff2";

const GlobalStyles = createGlobalStyle`
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
    url(${Poppin400Woff2}),
    url(${Poppin400Woff})
}

/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local(''),
    url(${Poppin500Woff2}),
    url(${Poppin500Woff})
}

/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/poppins-v15-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
    url(${Poppin600Woff2}),
    url(${Poppin600Woff})
}

/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url('./assets/fonts/poppins-v15-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
    url(${Poppin700Woff2}),
    url(${Poppin700Woff})
}

body {
	margin: 0;
  background: #09090E;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyles;
