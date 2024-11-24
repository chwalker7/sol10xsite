import React from "react";
import Rocket from "./images/rocket3.svg";
import Coins from "./images/coins.svg";
import Vote from "./images/vote.svg";

class Media_container extends React.Component {
  render() {
    return (
      <div className="media-container">
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Rocket" src={Rocket} />
            </div>
          </div>
          <div>
            <h2>High Yield Staking</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
              Earn 70% APY through our innovative staking mechanism - that's 10x the current Solana staking rewards, with rewards distributed every epoch.
            </p>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Coins" src={Coins} />
            </div>
          </div>
          <div>
            <h2>Fair Distribution</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
              Our reward cap strategy ensures fair distribution, with no single participant able to claim more than 5% of total rewards, preventing centralization.
            </p>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Vote" src={Vote} />
            </div>
          </div>
          <div>
            <h2>Built on Solana</h2>
            <div className="media-text-small">
            <p className="text text--muted text-media">
              Leveraging Solana's speed and security, SOL10x offers fast transaction finality with low fees while maintaining high security standards.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Media_container;
