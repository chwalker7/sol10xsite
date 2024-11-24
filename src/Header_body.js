import React from "react";
import styled from 'styled-components';
import solanaLogo from "./images/Solana/Logos/Solana Logomark/SVG/Solana Logomark - Color.svg";
import Claim from "./images/claim-coin.svg";

// Enhance existing styles while keeping original CSS classes
const WhitepaperButton = styled.a.attrs({
  className: 'value-proposition__button btn btn--flex btn--accent2 btn-whitepaper'
})`
  margin-top: 20px;
`;

const HeaderBody = () => {
  return (
    <div className="header_body">
      <div className="grid_choose grid-gap--small">
        <div className="value-proposition">
          <embed src={solanaLogo} className="token_logo"/>
          <h1 className="value-proposition__title">
            High-Yield Solana Staking
          </h1>
          <p className="value-proposition__text text text--small text--regular">
            Earn 70% APY through our innovative staking mechanism - that's 10x the current Solana staking rewards. 
            Rewards are distributed every epoch (approximately 2 days) at a rate of 0.3836% per epoch.
          </p>
          <div className="badge-container-add">
            <span className="badge-add badge--dark-add text--small">Reward Rate:</span>
            <span className="text text--small text--regular text--white badge-add2">
              0.3836% per epoch (≈2 days)
            </span>
          </div>
          <div className="badge-container-hold">
            <span className="badge-hold badge--dark-hold text--small">Total Supply:</span>
            <span className="text text--small text--regular text--white badge-hold2">
              6B SOL10x
            </span>
          </div>
          <div className="badge-container-price">
            <span className="badge-hold badge--dark-hold text--small">Staking Pool:</span>
            <span className="text text--small text--regular text--white badge-hold2">
              3B SOL10x (50%)
            </span>
          </div>
          <WhitepaperButton 
            href="https://docs.google.com/document/d/1i-7gMTO4jSexFr7bdcQ09N8F5T5CyIfmJRyWQ_3LuUk/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text--standart text--medium text-bold">Whitepaper</span>
            <div className="paper-icon-container">
              <img src={Claim} alt="Paper Icon" />
            </div>
          </WhitepaperButton>
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
