import React, { Component } from "react";
import { Link } from "react-router-dom";

class FilteredLaunches extends Component {
  state = {
    filteredLaunches: [],
    focus: false
  };

  focus = () => {
    this.setState({ focus: !this.state.focus });
  };

  blur = () => {
    this.setState({ focus: false });
  };

  filterTheLaunches = query => {
    let filteredLaunches = this.state.allLaunches.filter(eachLaunch => {
      return eachLaunch.mission_name.toLowerCase().includes(query);
    });
    this.setState({
      filteredLaunches
    });
  };

  showFilteredLaunches = () => {
    console.log("heyyy");
    //console.log(this.state.filteredLaunches.splice(0,4))
    return this.state.filteredLaunches.slice(0, 5).map(eachLaunch => {
      return (
        <div key={eachLaunch}>
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src={eachLaunch.links.mission_patch}
                      alt="Placeholder i"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <Link to={`/all-launches/${eachLaunch.mission_name}`}>
                    <p className="title is-4">{eachLaunch.mission_name}</p>
                  </Link>
                  <p className="subtitle is-6">
                    {eachLaunch.rocket.rocket_name}
                  </p>
                </div>
              </div>
              <div className="content">
                {eachLaunch.details}
                {/* Phasellus nec iaculis mauris. <a>@bulmaio</a>. */}
                {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
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
        <div>{this.state.ready ? this.showFilteredLaunches() : ""}</div>
      </div>
    );
  }
}

export default FilteredLaunches;
