export const theme = {
  colors: {
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
      950: '#030712',
    },
    green: '#ADFF4A',
    text: {
      primary: '#f8f8f8f8',
      red: '#FF4500',
      softRed: '#EE7E7E',
      gray: '#9CA3AF',
      yellow: '#F9C458',
    },
    backgrounds: {
      defaultGradient: 'linear-gradient(to bottom, #3B57CE, #19217E)',
      defaultImage: '#D9D9D9',
    },
  },

  typography: {
    fontFamily: {
      main: "'Roboto', sans-serif",
      secondary: "'Poppins', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
  },

  borders: {
    radius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '2.5rem',
      rounded: '50%',
    },
  },

  spacing: {
    none: '0',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },

  buttons: {
    primary: {
      background: '#414ca1',
    },
    sizes: {
      small: {
        padding: '6px 18px',
        fontSize: '14px',
      },
      medium: {
        padding: '10px 30px',
        fontSize: '16px',
      },
      large: {
        padding: '14px 42px',
        fontSize: '18px',
      },
    },
  },

  inputs: {
    backgroundGradient: 'linear-gradient(to right, #3B57CE, #19217E)',
    border: '1px solid #f8f8f8f8',
    placeholder: '',
  },
} as const;

export type Theme = typeof theme;
