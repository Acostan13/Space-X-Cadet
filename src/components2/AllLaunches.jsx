import React, { Component } from 'react';
import YouTube from "react-youtube";


class AllLaunches extends Component {
  state = {
    index: 89,
    eachMissionObj: {}
  };

  showLoadingScreen = () => {
    return <div> <progress className="progress is-large is-info" max="100">60%</progress>
    </div>
  }

  componentDidMount = async () => {
    let currentMissionObj = await this.props.allLaunches[this.state.index]

    this.setState({
      eachMissionObj: currentMissionObj
    })
  }
  launchDetails = () => {
    // let launchData = this.state.launch;
    // console.log('launchData', launchData);
    const opts = {
      height: "390",
      width: "640"
    };

    let launchData = this.props.allLaunches[this.state.index];

    // return this.props.allLaunches.map((previousLaunch,i)  => {
    return (
      <section className="section">
        <div className="container is-fluid has-text-centered">
          <h1 className="title">{launchData.mission_name} Mission</h1>
          <br></br>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    {/* {this.displayImages()} */}

                    <h1 className="title">
                      {launchData.mission_name} Lift Off!
                    </h1>
                    <figure className="image is-3by5">
                      <img src={launchData.links.flickr_images} alt="" />
                    </figure>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">
                    Watch The {launchData.mission_name} Mission Launch!
                  </p>
                  <div className="content">
                    {/* <!-- Content --> */}
                    <YouTube
                      className="container is-fluid"
                      playsInline
                      videoId={launchData.links.youtube_id}
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
                  <img src={launchData.links.mission_patch_small} alt="" />
                  <br></br>
                  <br></br>
                  <p className="title">Launch Date</p>
                  <div className="content">
                    <p className="subtitle">
                      {launchData.launch_date_local.slice(0, 10)}
                    </p>
                  </div>
                  {/* <!-- Content --> */}
                  <p className="title">Rocket Name</p>
                  <div className="content">
                    <p className="subtitle">{launchData.rocket.rocket_name}</p>
                  </div>
                  <p className="title">Manufacturer</p>
                  <div className="content">
                    <p className="subtitle">
                      {launchData.rocket.second_stage.payloads[0].manufacturer}
                    </p>
                    <br></br>
                  </div>
                </div>
              </article>
              <article className="tile is-child notification is-primary">
                <div className="content">
                  <p className="title">Details</p>
                  <p className="subtitle">{launchData.details}</p>
                </div>
                <br></br>
              </article>

              <article className="tile is-child notification is-warning">
                <p className="title">Learn More</p>
                <div className="content">
                  <p className="subtitle">
                    <a
                      className="button is-warning"
                      href={launchData.links.reddit_campaign}
                    >
                      {" "}
                      Reddit Campaign
                    </a>
                  </p>
                  <div className="content">
                    <p className="subtitle">
                      <a
                        className="button is-warning"
                        href={launchData.links.presskit}
                      >
                        {" "}
                        Press Kit
                      </a>
                    </p>
                    <p className="subtitle">
                      <a
                        className="button is-warning"
                        href={launchData.links.wikipedia}
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
          <br></br>
          <button
          className="button"
          disabled={this.state.index < 89 ? false : true}
          onClick={() =>
            this.setState({
              index:
                this.state.index < 89 ? this.state.index + 1 : this.state.index
            })
          }
        >
          Next Launch
        </button>
        <button
          className="button"
          disabled={this.state.index > 0 ? false : true}
          onClick={() =>
            this.setState({
              index:
                this.state.index > 0 ? this.state.index - 1 : this.state.index
            })
          }
        >
          Previous Launch
        </button>
        </div>
      </section>
    );
    // })
  };


  render() {
    console.log(this, '???')
    return (
      <div>
        {this.props.ready? (this.launchDetails()) : (this.showLoadingScreen())}
      </div>
    );
  }
}

export default AllLaunches;