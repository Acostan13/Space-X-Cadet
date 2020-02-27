import React, { Component } from 'react'
import {
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton
  } from 'react-share';
  import {
    TwitterIcon,
    LinkedinIcon,
    RedditIcon
  } from 'react-share';

class SocialMedia extends Component {
    render() {
        return (
            <div>
                <LinkedinShareButton children='' url=' https://github.com' round='true' ><LinkedinIcon></LinkedinIcon></LinkedinShareButton>
                <TwitterShareButton children='Share' url=' https://github.com'><TwitterIcon></TwitterIcon></TwitterShareButton>
                <RedditShareButton children='' url=' https://github.com'><RedditIcon></RedditIcon></RedditShareButton>
            </div>
        );
    }
}

export default SocialMedia;