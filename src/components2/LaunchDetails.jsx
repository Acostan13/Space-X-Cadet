import React, { Component } from 'react';
import YouTube from "react-youtube";

class LaunchDetails extends Component {
  
  showLoadingScreen = () => {
    return <div> <progress className="progress is-large is-info" max="100">60%</progress>
    </div>
  }

  

  showDetailsOfASingleLaunch = () => {
    const opts = {
      height: "390",
      width: "640"
    };

    let theMission = this.props.allLaunches.find(eachLaunch => {
      console.log(eachLaunch.mission_name)
      return eachLaunch.mission_name === this.props.match.params.launchName;
    });
    

    return (
<section className="section">
        <div className="container is-fluid has-text-centered">
          <h1 className="title">{theMission.mission_name} Mission</h1>
          <br></br>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    {/* {this.displayImages()} */}

                    <h1 className="title">
                      {theMission.mission_name} Lift Off!
                    </h1>
                    <figure className="image is-3by5">
                      <img src={theMission.links.flickr_images} alt="" />
                    </figure>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">
                    Watch The {theMission.mission_name} Mission Launch!
                  </p>
                  <div className="content">
                    {/* <!-- Content --> */}
                    <YouTube
                      className="container is-fluid"
                      playsInline
                      videoId={theMission.links.youtube_id}
                      opts={opts}
                      onReady={this._onReady}
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="title">Mission Logo</p>

                  {/* <!-- Content --> */}
                  <img src={theMission.links.mission_patch_small} alt="" />
                  <br></br>
                  <br></br>
                  <p className="title">Launch Date</p>
                  <div className="content">
                    <p className="subtitle">
                      {theMission.launch_date_local.slice(0, 10)}
                    </p>
                  </div>
                  {/* <!-- Content --> */}
                  <p className="title">Rocket Name</p>
                  <div className="content">
                    <p className="subtitle">{theMission.rocket.rocket_name}</p>
                  </div>
                  <p className="title">Manufacturer</p>
                  <div className="content">
                    <p className="subtitle">
                      {theMission.rocket.second_stage.payloads[0].manufacturer}
                    </p>
                    <br></br>
                  </div>
                </div>
              </article>
              <article className="tile is-child notification is-primary">
                <div className="content">
                  <p className="title">Details</p>
                  <p className="subtitle">{theMission.details}</p>
                </div>
                <br></br>
              </article>

              <article className="tile is-child notification is-warning">
                <p className="title">Learn More</p>
                <div className="content">
                  <p className="subtitle">
                    <a
                      className="button is-warning"
                      href={theMission.links.reddit_campaign}
                    >
                      {" "}
                      Reddit Campaign
                    </a>
                  </p>
                  <div className="content">
                    <p className="subtitle">
                      <a
                        className="button is-warning"
                        href={theMission.links.presskit}
                      >
                        {" "}
                        Press Kit
                      </a>
                    </p>
                    <p className="subtitle">
                      <a
                        className="button is-warning"
                        href={theMission.links.wikipedia}
                      >
                        {" "}
                        Wikipedia
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }

  

  render() {
    console.log(this.props.location.eachLaunch)

    return (
      <div>
        {this.props.ready? (this.showDetailsOfASingleLaunch()) : (this.showLoadingScreen())}
      </div>
    );
  }
}

export default LaunchDetails;