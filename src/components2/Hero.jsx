import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div>
        <img src={require("../components2/spacex.jpg")} alt="spacex" />
      </div>
    );
  }
}

export default Hero;
