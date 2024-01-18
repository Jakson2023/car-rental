import { createGlobalStyle } from "styled-components";
import ManropeMedium from '../fonts/Manrope-Medium.woff2'
import ManropeRegular from '../fonts/Manrope-Regular.woff2'
import ManropeSemiBold from '../fonts/Manrope-SemiBold.woff2'

export const GeneralStyles = createGlobalStyle`
@font-face {
    font-family:'Manrope' ;
    font-weight: 400;
    src: url(${ManropeMedium});
}
@font-face {
    font-family:'Manrope' ;
    font-weight: 500;
    src: url(${ManropeRegular});
}
@font-face {
    font-family:'Manrope' ;
    font-weight: 600;
    src: url(${ManropeSemiBold});
}

body {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  width: auto;
}
button {
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: inherit;
}
html {
  scroll-behavior: smooth;
}


`