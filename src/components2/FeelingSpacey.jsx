import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeelingSpacey extends Component {

  showLoadingScreen = () => {
    return <div> <progress className="progress is-large is-info" max="100">60%</progress>
    </div>
  }

  displayFiveLatestLaunches = () => {
    return this.props.allLaunches.slice(89,85).map((eachLaunch, index) => {
      return (
        <div key={index}>
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src={eachLaunch.links.mission_patch}
                      alt="Mission Patch"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <Link to={`/all-launches/${eachLaunch.mission_name}`}>
                    {eachLaunch.mission_name}
                  </Link>
                  <p className="subtitle is-6">
                    {eachLaunch.rocket.rocket_name}
                  </p>
                </div>
              </div>
              <div className="content-center">
                {eachLaunch.details}
                <br></br>
                <time dateTime="2016-1-1">
                  {eachLaunch.launch_date_local.slice(0, 10)}
                </time>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {this.props.ready ? this.displayFiveLatestLaunches() : this.showLoadingScreen()}
      </div>
    );
  }
}

export default FeelingSpacey;
