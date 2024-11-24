import React from "react";
import {Link} from 'react-scroll';

class Grid_choose extends React.Component {
  render() {
    return (
      <div className="grid_choose">
        <div className="card_why">
        <div className="banner_grid">
          <h2 className="banner__title">Why Choose SOL10x</h2>
          
          <p className="banner__text text text--small text--regular text--muted why-text">
            Experience next-generation staking rewards on the Solana blockchain. SOL10x offers 10 times the current Solana staking APY while maintaining security and fairness through innovative reward capping mechanisms. Built with a focus on long-term sustainability and fair distribution, SOL10x represents the future of high-yield staking.
          </p>
          
          <ul className="whyList">
            <li className="nav__list__item_2 text text--small text--regular">70% APY - 10x Higher Than Traditional Solana Staking</li>
            <li className="nav__list__item_2 text text--small text--regular">Rewards Every Epoch (≈2 days) at 0.3836% Per Epoch</li>
            <li className="nav__list__item_2 text text--small text--regular">Fair Distribution with 5% Individual Reward Cap</li>
            <li className="nav__list__item_2 text text--small text--regular">Built on Solana's Fast, Secure Blockchain</li>
          </ul>
          <Link to="features" spy={true} smooth={true}><button className="btn btn--accent">
            <span className="text--standart text--medium text-bold">Learn More</span>
          </button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid_choose;
