import { createGlobalStyle } from 'styled-components';

// Theme object for styled-components enhancements
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ABC Diatype';
    src: url('./images/Solana/Fonts/ABC Diatype/ABCDiatype-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'ABC Diatype';
    src: url('./images/Solana/Fonts/ABC Diatype/ABCDiatype-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'ABC Diatype Semi-Mono';
    src: url('./images/Solana/Fonts/ABC Diatype Semi-Mono/ABCDiatypeSemi-Mono-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --color-primary: #0B1731;
    --color-primary-opacity: #0B1731ef;
    --color-secondary: #1E2640;
    --color-accent: #00FFA3;
    --color-accent-hover: #00CC83;
    --color-accent-text: #0B1731;
    --color-white-btn: #922C40;
    --color-white-btn-hover: #681916;
    --color-white-btn-text: #F3EAC0;
    --color-connect-btn: #922C40;
    --color-connect-btn-hover: #681916;
    --color-connect-btn-text: #F3EAC0;
    --color-dark-purple: #0d0d2b;
    --color-dark-blue: #121a31ef;
    --color-white: #ffffff;
    --color-light-bg-left: #f8f9fb;
    --color-light-bg-right: #fafbff;
    --color-grey-7: #fbfcfe;
    --color-grey-6: #f2f2f2;
    --color-grey-5: #e0e0e0;
    --color-grey-4: #bdbdbd;
    --color-grey-3: #828282;
    --color-dark-green: #0b4138;
    --color-black-10: rgba(31, 28, 28, 0.678);
    --color-thumb: #00FFA3;
    --color-track: #681916;
    --color-thumb-hover: #00CC83;
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--color-track);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--color-thumb);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-thumb-hover);
  }

  /* Global Styles */
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }

  html {
    font-size: 50%;
    font-family: "Rubik", sans-serif;
  }

  body {
    font-size: 2rem;
    line-height: 1.5;
    color: var(--color-white);
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    html {
      font-size: 62.5%;
    }
  }

  /* Typography */
  h1,
  h2,
  h3 {
    font-weight: bold;
    line-height: 1.5;
  }

  h1 {
    font-size: 4.4rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  @media screen and (min-width: 850px) {
    h1 {
      font-size: 4.6rem;
    }

    h2 {
      font-size: 3.8rem;
    }
    h3 {
      font-size: 3.2rem;
    }
  }

  @media screen and (min-width: 1350px) {
    h1 {
      font-size: 6.4rem;
    }

    h2 {
      font-size: 4rem;
    }
  }
`;

export default GlobalStyle;

// Theme object for styled-components
export const theme = {
  colors: {
    primary: '#0B1731',
    primaryOpacity: '#0B1731ef',
    secondary: '#1E2640',
    accent: '#00FFA3',
    accentHover: '#00CC83',
    accentText: '#0B1731',
    whiteBtn: '#922C40',
    whiteBtnHover: '#681916',
    whiteBtnText: '#F3EAC0',
    connectBtn: '#922C40',
    connectBtnHover: '#681916',
    connectBtnText: '#F3EAC0',
    darkPurple: '#0d0d2b',
    darkBlue: '#121a31ef',
    white: '#ffffff',
    lightBgLeft: '#f8f9fb',
    lightBgRight: '#fafbff',
    grey7: '#fbfcfe',
    grey6: '#f2f2f2',
    grey5: '#e0e0e0',
    grey4: '#bdbdbd',
    grey3: '#828282',
    darkGreen: '#0b4138',
    black10: 'rgba(31, 28, 28, 0.678)',
    thumb: '#00FFA3',
    track: '#681916',
    thumbHover: '#00CC83'
  },
  mediaQueries: {
    mobile: '(max-width: 610px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    desktop: '(min-width: 1200px)',
    largeDesktop: '(min-width: 1350px)'
  }
};
