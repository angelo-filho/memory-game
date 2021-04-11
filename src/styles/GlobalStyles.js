import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #2D3047;
    --green: #2BC889;
    --pink: #F392F0;
    --black: #ffffff;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;
