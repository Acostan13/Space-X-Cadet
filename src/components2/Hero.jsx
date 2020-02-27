import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div>
        <img
        //   className="has-ratio"
        //   width="1200"
        //   height="360"
          src={require('../components2/spacex.jpg')}
          alt="spacex"
        />
      </div>
    );
  }
}

export default Hero;
