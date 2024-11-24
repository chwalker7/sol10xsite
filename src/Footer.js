import React from "react";
import Logo from "./images/logo.svg";
import { Text, List } from "./components";
import { FooterContainer, FooterInner, FooterLeft, FooterRight } from "./layouts";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterLeft>
          <Text small muted>© 2024 Sol10x. All rights reserved.</Text>
        </FooterLeft>
        <FooterRight>
          <List inline>
            <li>
              <Text small muted>Terms</Text>
            </li>
            <li>
              <Text small muted>Privacy</Text>
            </li>
          </List>
        </FooterRight>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
