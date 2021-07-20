import { createGlobalStyle } from "styled-components";
import Poppin400 from "./assets/fonts/poppins-v15-latin-regular.woff2";
import Poppin500 from "./assets/fonts/poppins-v15-latin-500.woff2";
import Poppin600 from "./assets/fonts/poppins-v15-latin-600.woff2";
import Poppin700 from "./assets/fonts/poppins-v15-latin-700.woff2";

const GlobalStyles = createGlobalStyle`
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local(''),
    url(${Poppin400})
}

/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local(''),
    url(${Poppin500})
}

/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/poppins-v15-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
    url(${Poppin600})
}

/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url('./assets/fonts/poppins-v15-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
		url(${Poppin700})
}

body {
	margin: 0;
	background: #09090E;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyles;
