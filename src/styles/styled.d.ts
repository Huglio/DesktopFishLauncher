import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundGradient: string;
      text: string;
    };
    fonts: {
      main: string;
      heading: string;
    };
    buttons: {
      primary: {
        background: string;
        hover: string;
        active: string;
        disabled: string;
        text: string;
      };
    };
  }
}
