import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import HeaderTop from './Header_top';
import HeaderBody from './Header_body';
import Features from './Features';
import Footer from './Footer';
import GlobalStyle, { theme } from './styles';
import './css/styles.css'; // Keep original CSS

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header>
          <HeaderTop />
          <HeaderBody />
        </Header>
        <Features />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
