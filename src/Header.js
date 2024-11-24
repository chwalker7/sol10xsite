import React from "react";
import styled from 'styled-components';
import HeaderTop from "./Header_top";
import HeaderBody from "./Header_body";
import ParticlesUsed from "./ParticlesUsed";

// Enhance the header with styled-components while keeping original CSS class
const StyledHeader = styled.header.attrs({
  className: 'header' // Keep original CSS class
})`
  // Add any additional styles or overrides here
  position: relative;
  padding: 1rem 3rem 5rem;
  height: ${props => props.dapp ? '8vh' : '110rem'};

  @media ${props => props.theme.mediaQueries.laptop} {
    padding: 0rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderBody />
      <ParticlesUsed />
    </StyledHeader>
  );
};

export default Header;
