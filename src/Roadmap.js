import React from "react";

class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap">
        <div className="roadmap-header">
        <h2>Roadmap</h2>
        <p className="text text--standart text--regular">
          Our strategic roadmap for building SOL10x into a leading high-yield staking platform on Solana.
        </p>
        </div>
        <div className="road-body">
        <div className="card card--secondary card-red">
          <div className="card__header">
            <h3>Phase 1 - Launch & Initial Staking</h3>
          </div>
          <ul>
            <li>Token Launch on Solana</li>
            <li>70% APY Staking Pools</li>
            <li>Wallet Integration (Phantom, Solflare)</li>
            <li>Smart Contract Audits</li>
          </ul>
        </div>
        <div className="card card--white card-yellow">
          <div className="card__header">
            <h3>Phase 2 - Community Growth</h3>
          </div>
          <ul>
            <li>Community Engagement</li>
            <li>Strategic Partnerships</li>
            <li>DEX Liquidity Pools</li>
            <li>Governance Features</li>
          </ul>
        </div>
        <div className="card card--white card-green">
          <div className="card__header">
            <h3>Phase 3 - Long-Term Sustainability</h3>
          </div>
          <ul>
            <li>Inflation Control Mechanisms</li>
            <li>Cross-chain Compatibility</li>
            <li>Ecosystem Expansion</li>
            <li>Community-Driven Development</li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
