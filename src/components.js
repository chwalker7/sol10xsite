import styled, { css } from 'styled-components';

// Text Components
export const Title = styled.h1`
  font-weight: ${props => props.medium ? 'medium' : 'bold'};
  font-size: ${props => props.small ? '1.6rem' : '2.8rem'};
  line-height: 1.5;
  letter-spacing: ${props => props.small ? '4px' : 'normal'};
`;

export const Text = styled.p`
  font-size: ${props => {
    if (props.small) return '1.8rem';
    if (props.standart) return '1.8rem';
    return '2rem';
  }};
  line-height: ${props => props.small ? '2.8' : '1.5'};
  font-weight: ${props => {
    if (props.bold) return 'bold';
    if (props.medium) return 'medium';
    if (props.regular) return '400';
    return 'normal';
  }};
  color: ${props => {
    if (props.white) return props.theme.colors.white;
    if (props.muted) return props.theme.colors.grey6;
    if (props.grey) return props.theme.colors.grey3;
    if (props.accent) return props.theme.colors.accent;
    if (props.primary) return props.theme.colors.primary;
    return 'inherit';
  }};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  margin-left: ${props => props.small ? '1rem' : '0'};
`;

// Button Components
export const Button = styled.button`
  padding: 1.4rem 3.2rem;
  border: 0;
  outline: none;
  border-radius: 32px;
  cursor: pointer;
  display: ${props => props.block ? 'block' : 'inline-block'};
  width: ${props => props.block ? '100%' : 'auto'};

  ${props => props.flex && css`
    display: inline-flex;
    align-items: center;
  `}

  ${props => props.accent && css`
    background-color: ${props.theme.colors.accent};
    color: ${props.theme.colors.accentText};
    &:hover {
      background-color: ${props.theme.colors.accentHover};
    }
  `}

  ${props => props.accent2 && css`
    background-color: ${props.theme.colors.whiteBtn};
    color: ${props.theme.colors.whiteBtnText};
  `}

  ${props => props.white && css`
    background-color: ${props.theme.colors.white};
    color: ${props.theme.colors.primary};
    &:hover {
      background-color: black;
      color: white;
    }
  `}

  ${props => props.link && css`
    padding: 0;
    background-color: transparent;
    color: ${props.theme.colors.white};
    &:hover {
      color: ${props.theme.colors.accentHover};
    }
  `}
`;

// Card Components
export const Card = styled.div`
  text-align: center;
  padding: 4.8rem 2.4rem;
  border-radius: 16px;
  width: ${props => props.dapp ? '70%' : '20%'};
  margin: ${props => props.dapp ? '0 auto' : '0'};
  background-color: ${props => {
    if (props.secondary) return props.theme.colors.secondary;
    if (props.white) return props.theme.colors.white;
    if (props.red) return 'rgba(218, 41, 41, 0.425)';
    if (props.yellow) return 'rgba(243, 174, 26, 0.671)';
    if (props.green) return 'rgba(12, 190, 6, 0.815)';
    if (props.dapp) return props.theme.colors.darkBlue;
    return 'transparent';
  }};
  color: ${props => {
    if (props.white) return 'black';
    if (props.red) return 'rgb(73, 4, 4)';
    if (props.yellow) return 'rgb(87, 59, 0)';
    if (props.green) return 'rgb(2, 70, 0)';
    if (props.secondary) return props.theme.colors.white;
    return 'inherit';
  }};

  @media ${props => props.theme.mediaQueries.mobile} {
    width: 90%;
  }
`;

// Grid Components
export const Grid = styled.div`
  @media ${props => props.theme.mediaQueries.tablet} {
    display: grid;
    grid-template-columns: ${props => props.columns || '1fr 1fr'};
    align-items: ${props => props.centered ? 'center' : 'start'};
    gap: ${props => props.small ? '8px' : '0'};
  }
`;

// Icon Components
export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const MediaIcon = styled.img`
  height: 55px;
  height: auto;
  max-width: 55px;
  max-height: 55px;
`;

export const CurrencyIcon = styled.img`
  max-width: ${props => props.variant === '2' ? '100%' : '60%'};
  height: auto;
  margin: 0 auto;
  ${props => props.variant === '2' && css`
    margin-top: 4rem;
    margin-bottom: 4rem;
  `}
`;

// Badge Components
export const Badge = styled.span`
  padding: 0.8rem 1.6rem;
  border-radius: 32px;
  display: inline-block;
  margin-right: 1rem;
  background-color: ${props => props.dark ? props.theme.colors.white : 'transparent'};
  color: ${props => props.dark ? props.theme.colors.primary : 'inherit'};
`;

export const BadgeContainer = styled.div`
  display: block;
  width: 45rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.black10};
  border-radius: 32px;
  margin: 1rem 0;
  text-align: left;

  @media ${props => props.theme.mediaQueries.mobile} {
    width: 100%;
  }
`;

// List Components
export const List = styled.ul`
  list-style-type: none;

  li {
    line-height: 38px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }

  ${props => props.inline && css`
    li {
      display: inline;
      margin-right: 32px;
    }
  `}
`;
