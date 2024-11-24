import styled from 'styled-components';

// Header Components
export const HeaderContainer = styled.header`
  position: relative;
  padding: 1rem 3rem 5rem;
  height: ${props => props.dapp ? '8vh' : '110rem'};
  background-color: ${props => props.theme.colors.primary};

  @media ${props => props.theme.mediaQueries.laptop} {
    padding: 0rem;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.1rem;

  @media ${props => props.theme.mediaQueries.mobile} {
    display: block;
  }

  @media ${props => props.theme.mediaQueries.largeDesktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5.1rem;
    padding: 1rem 12rem 0rem;
    background-color: ${props => props.theme.colors.primaryOpacity};
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;

  @media ${props => props.theme.mediaQueries.mobile} {
    display: inline-flex;
    align-items: center;
    padding: 0;
    margin-left: -5rem;
  }
`;

export const HeaderBody = styled.div`
  text-align: center;
  height: 100vh;

  @media ${props => props.theme.mediaQueries.tablet} {
    text-align: start;
  }
`;

// Footer Components
export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  padding: 0.5rem 3rem 2.5rem;

  @media ${props => props.theme.mediaQueries.tablet} {
    padding: 0.5rem 6rem 2.5rem;
  }

  @media ${props => props.theme.mediaQueries.desktop} {
    padding: 2.5rem 12rem 2.5rem;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  li {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const FooterTop = styled.div`
  margin-bottom: 2.5rem;

  @media ${props => props.theme.mediaQueries.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0rem;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;

  @media ${props => props.theme.mediaQueries.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// Feature Section Components
export const FeaturesSection = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem 3rem 5rem;
  text-align: center;

  @media ${props => props.theme.mediaQueries.laptop} {
    padding: 10rem 0 10rem;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  margin-left: -5rem;
`;

export const FeaturesBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.bottomMargin ? '12rem' : '5rem'};
  
  @media ${props => props.theme.mediaQueries.laptop} {
    text-align: left;
    display: block;
    flex-direction: unset;
    align-items: unset;
    margin-bottom: 0;
    margin-left: ${props => !props.left && '5rem'};
  }
`;

// Media Container Components
export const MediaContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: -5rem;
`;

export const MediaItem = styled.div`
  display: flex;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    background-color: ${props => props.theme.colors.black10};
    border-radius: 100%;
    margin-top: 4rem;
    margin-right: 2.4rem;
    margin-bottom: 8rem;
  }
`;

// Roadmap Components
export const RoadmapSection = styled.section`
  margin: 0 auto;
  padding: 6.2rem 4.8rem 4.8rem;
  background-color: white;
  border-radius: 15px;
  color: black;
  text-align: left;
  box-shadow: 0 2rem 15rem 0 rgba(57, 23, 119, 0.3);
  margin-bottom: 30%;
  margin-top: 3rem;

  @media ${props => props.theme.mediaQueries.desktop} {
    margin-bottom: 10%;
    width: 100rem;
  }
`;

export const RoadmapHeader = styled.div`
  text-align: center;
  margin-top: -5rem;

  p {
    margin-top: 2rem;
  }
`;

export const RoadmapBody = styled.div`
  padding-top: 4.8rem;

  p:first-child {
    margin-bottom: 1.6rem;
  }

  h3 {
    margin-bottom: 0.4rem;
  }
`;

// Background Items
export const BackgroundItem = styled.img`
  width: ${props => props.width || '50%'};
  position: absolute;
  ${props => props.top && `top: ${props.top}`};
  ${props => props.bottom && `bottom: ${props.bottom}`};
  ${props => props.left && `left: ${props.left}`};
  ${props => props.right && `right: ${props.right}`};
  transform: ${props => props.rotate && `rotate(${props.rotate}deg)`};
  pointer-events: none;
`;

// Value Proposition Components
export const ValueProposition = styled.div`
  padding: 3rem;

  @media ${props => props.theme.mediaQueries.largeDesktop} {
    padding: 1rem 12rem 15rem;
  }
`;

export const TokenLogo = styled.img`
  width: 40ch;
  float: right;

  @media ${props => props.theme.mediaQueries.mobile} {
    width: 30ch;
  }

  @media ${props => props.theme.mediaQueries.laptop} {
    width: 50ch;
  }

  @media (max-width: 1618px) {
    width: 30ch;
  }
`;

// Animation Keyframes
export const popupAnimation = `
  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
`;
