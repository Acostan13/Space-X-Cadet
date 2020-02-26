import React, { Component } from 'react';
import Twitter from './Twitter';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>SpaceX</strong> Launch by<a href="https://github.com/Acostan13"> Alex Costan</a>. <Twitter Check out this sweet page/>
    </p>
    
  </div>
</footer>
            </div>
        );
    }
}

export default Footer;