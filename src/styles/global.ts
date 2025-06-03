import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
 ${reset}

  html, body {
    height: 100%;
    min-height: 100vh;
  }

  body {
	  background: ${props => props.theme.colors.backgroundGradient};
    background-attachment: fixed;
  }

  p, a, div, button, input, textarea, label, li, td, th {
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-family: ${props => props.theme.fonts.heading};
    color: ${props => props.theme.colors.text};
  }

  span {
    font-family: inherit;
    color: ${props => props.theme.colors.text};
  }

  a, button, select, summary, details, label,
  input[type="checkbox"], input[type="radio"], input[type="submit"], input[type="button"] {
    cursor: pointer;
  }

  input[type="text"], input[type="email"], input[type="password"], textarea {
    cursor: text;
  }
`;
