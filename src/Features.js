import React from "react";
import styled from 'styled-components';
import background6 from "./images/background-item-6.svg";
import background7 from "./images/background-item-7.svg";
import solanaLogo from "./images/Solana/Logos/sfl/SVG/Solana Foundation Logotype - Color White.svg";

// Enhance existing styles while keeping original CSS classes
const SolanaImage = styled.img.attrs({
  alt: "Solana"
})`
  vertical-align: middle;
  margin-right: ${props => props.large ? '8px' : '4px'};
  margin-left: ${props => props.large ? '8px' : '4px'};
  height: ${props => props.height ? `${props.height}px` : (props.large ? '24px' : '16px')};
`;

const Features = () => {
  return (
    <section className="features">
      <h1>
        Token Features
      </h1>
      <div className="banner-bottom-margin">
        <div className="banner--left">
          <h2 className="banner__title">Token Supply</h2>
          <p className="banner__text text text--small text--regular text--muted">
            SOL10x has a fixed total supply of 6 billion tokens. No additional tokens will be minted after the initial supply is distributed, ensuring long-term value preservation.
          </p>
          <div className="road-body features-card">
            <div className="card card--secondary card--white">
              <div className="card__header">
                <h3>Total Supply</h3>
              </div>
              <h2>6B SOL10x</h2>
            </div>
            <div className="card card--secondary card--white">
              <div className="card__header">
                <h3>Staking Rewards Pool</h3>
              </div>
              <h2>50%</h2>
            </div>
            <div className="card card--white card--white">
              <div className="card__header">
                <h3>Liquidity Pool</h3>
              </div>
              <h2>20%</h2>
            </div>
            <div className="card card--white card--white">
              <div className="card__header">
                <h3>Initial Distribution</h3>
              </div>
              <h2>30%</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom-margin">
        <div className="banner--left">
          <h2 className="banner__title">High-Yield Staking</h2>
          <p className="banner__text text text--small text--regular text--muted">
            Earn 70% APY through our innovative staking mechanism - that's 10x the current <SolanaImage height={55} large_ src={solanaLogo} /> staking rewards. Rewards are distributed every epoch (approximately 2 days) at a rate of 0.3836% per epoch.
          </p>
          <p className="banner__text text text--small text--regular text--muted">
            For example, staking 10,000 SOL10x tokens compounding at 0.3836% per epoch over 183 epochs (approximately one year) would yield 20,150.52 SOL10x tokens. This represents a total gain of 10,150.52 tokens through compound interest, demonstrating the power of the 70% APY when compounded over all epochs in a year.
          </p>
          <div className="road-body features-card">
            <div className="card card--secondary card--white">
              <div className="card__header">
                <h3>Minimum Stake</h3>
              </div>
              <h2>100 SOL10x</h2>
            </div>
            <div className="card card--secondary card--white">
              <div className="card__header">
                <h3>Reward Rate</h3>
              </div>
              <h2>70% APY</h2>
            </div>
            <div className="card card--white card--white">
              <div className="card__header">
                <h3>Per Epoch</h3>
              </div>
              <h2>0.3836%</h2>
            </div>
            <div className="card card--white card--white">
              <div className="card__header">
                <h3>Epoch Length</h3>
              </div>
              <h2>≈2 days</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom-margin">
        <div className="banner--left">
          <h2 className="banner__title">
            Fair Distribution System
          </h2>
          <p className="banner__text text text--small text--regular text--muted">
            Our reward cap strategy ensures fair distribution by limiting individual rewards to 5% of the total staking pool. This prevents centralization and encourages broader participation. Additionally, a participant's annual reward cannot exceed 10,000 SOL10x tokens, whichever is lower.
          </p>
        </div>
      </div>
      <div className="grid_choose">
        <div className="banner--left">
          <h2 className="banner__title">
            Built on <SolanaImage src={solanaLogo} height={55} large />
          </h2>
          <p className="banner__text text text--small text--regular text--muted">
            SOL10x leverages Solana's high-performance blockchain, offering fast transaction finality with low fees while maintaining robust security standards through Solana's Proof-of-Stake consensus.
          </p>
        </div>
      </div>
      <img
        className="background-item-6"
        src={background6}
        alt="Background item 6"
      />
      <img
        className="background-item-7"
        src={background7}
        alt="Background item 7"
      />
    </section>
  );
};

export default Features;
