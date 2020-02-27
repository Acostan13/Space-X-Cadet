import React, { Component } from "react";
import {
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton
} from "react-share";
import { TwitterIcon, LinkedinIcon, RedditIcon } from "react-share";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <br></br>
          <div className="content has-text-centered">
            <LinkedinShareButton
              children=""
              url="https://trusting-dubinsky-02a599.netlify.com/"
              round="true"
            >
              <LinkedinIcon round="true"></LinkedinIcon>
            </LinkedinShareButton>
            <TwitterShareButton
              children=""
              url="https://trusting-dubinsky-02a599.netlify.com/"
              round="true"
            >
              <TwitterIcon round="true"></TwitterIcon>
            </TwitterShareButton>
            <RedditShareButton
              children=""
              url="https://trusting-dubinsky-02a599.netlify.com/"
            >
              <RedditIcon round="true"></RedditIcon>
            </RedditShareButton>
            <br></br>
            <p>
              <strong>SpaceX</strong> Cadet by
              <a href="https://github.com/Acostan13"> Alex Costan</a>.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
