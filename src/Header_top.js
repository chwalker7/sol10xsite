import React from "react";
import styled from 'styled-components';
import Logo from "./images/logo.png";
import Twitter from "./images/twitter.svg";
import Discord from "./images/Discord.svg";
import {Link as LinkR} from 'react-scroll';
import { Link } from "react-router-dom";

// Enhance existing styles while keeping original CSS classes
const StyledButton = styled.button.attrs(props => ({
  className: `btn ${props.accent2 ? 'btn--accent2' : ''} ${props.link ? 'btn--link' : ''} text text--small text--medium ${props.className || ''}`
}))``;

const HeaderTop = () => {
  const handleTwitterClick = () => {
    window.open("https://bsky.app/profile/sol10x.bsky.social", "_blank", "noopener noreferrer");
  };

  return (
    <div className="header_top">
      <div className="logo">
        <img src={Logo} alt="SOL10x brand logo" style={{ width: '32px', height: '32px' }} />
        <span className="logo-topleft">SOL10x</span>
      </div>
      <nav className="header-nav">
        <ul className="list list--inline">
          <LinkR to="features" spy={true} smooth={true}>
            <li className="list__item text text--small text--regular">
              Features
            </li>
          </LinkR>
        </ul>
        <a href="https://bsky.app/profile/solana10x.com" target="_blank" rel="noopener noreferrer">
          <StyledButton link>
            <img className="discord" alt="Social" src={Twitter} />
          </StyledButton>
        </a>
        <a href="https://discord.gg/KjZGRPbd" target="_blank" rel="noopener noreferrer">
          <StyledButton link>
            <img className="discord" alt="Discord" src={Discord} />
          </StyledButton>
        </a>
        <StyledButton link onClick={handleTwitterClick}>
          <img className="discord2" alt="Social" src={Twitter} />
        </StyledButton>
      </nav>
    </div>
  );
};

export default HeaderTop;
