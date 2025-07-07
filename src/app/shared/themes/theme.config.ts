export interface Theme {
  name: string;
  displayName: string;
  properties: {
    // Elements
    background: string;
    headline: string;
    paragraph: string;
    button: string;
    buttonText: string;
    // Illustration
    stroke: string;
    main: string;
    highlight: string;
    secondary: string;
    tertiary: string;
  };
}
export const theme: Record<string, Theme> = {
  light: {
    name: 'light',
    displayName: 'Light Theme',
    properties: {
      background: '#fffffe',
      headline: '#272343',
      paragraph: '#2d334a',
      button: '#ffd803',
      buttonText: '#272343',
      stroke: '#272343',
      main: '#fffffe',
      highlight: '#ffd803',
      secondary: '#e3f6f5',
      tertiary: '#bae8e8',
    },
  },
  dark: {
    name: 'dark',
    displayName: 'Dark Theme',
    properties: {
      background: '#16161a',
      headline: '#fffffe',
      paragraph: '#94a1b2',
      button: '#7f5af0',
      buttonText: '#fffffe',
      stroke: '#010101',
      main: '#fffffe',
      highlight: '#7f5af0',
      secondary: '#72757e',
      tertiary: '#2cb67d',
    },
  },
};
