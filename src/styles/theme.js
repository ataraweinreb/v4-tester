const theme = {
  colors: {
    dark: '#000007',
    darkestNavy: '#01050b',
    darkNavy: '#ffd542',
    navy: '#000000',
    lightNavy: '#ff0055',
    darkGrey: '#ffffff',
    mediumGrey: '#ffffff',
    blueGrey: '#ffffff',
    grey: '#ffffff',
    lightGrey: '#ffffff',
    slate: '#ffffff',
    lightSlate: '#ffffff',
    lightestSlate: '#ffffff',
    offWhite: '#ffffff', //'#dce7ff',
    white: '#ffffff', //'#ff0055',
    pink: '#ffffff', //'#FF647F',
    yellow: '#000000',
    orange: '#FF9E64',
    green: '#ffffff', //'#ffd542',
    blue: '#ffffff', //'#71AFFF',
    darkBlue: '#1D7FFC',
    highlight: 'rgba(41, 61, 90, 0.99)',
    transGreen: 'rgba(100, 255, 218, 0.07)',
    transNavy: 'rgba(10, 25, 47, 0.7)',
    shadowNavy: 'rgba(2, 12, 27, 0.7)',
  },

  fonts: {
    Calibre:
      'Inter, Gilroy, Roboto Mono, Fira Mono, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'Inter, Calibre, SFMono, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
