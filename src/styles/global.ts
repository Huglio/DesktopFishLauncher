import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
 ${reset}

  html, body {
    height: 100%;
    min-height: 100vh;
  }

  body {
	  background: ${props => props.theme.colors.backgrounds.defaultGradient};
    background-attachment: fixed;
  }

  p, a, div, button, input, textarea, label, li, td, th, h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.fontFamily.main};
    color: ${props => props.theme.colors.text.primary};
  }

  a {
    text-decoration: none;
  }

  span {
    font-family: inherit;
    color: inherit;
  }

  a, button, select, summary, details, label,
  input[type="checkbox"], input[type="radio"], input[type="submit"], input[type="button"] {
    cursor: pointer;
  }

  input[type="text"], input[type="email"], input[type="password"], textarea {
    cursor: text;
  }

  input, input:focus {
    outline: none;
    border: none;
  }
`;
