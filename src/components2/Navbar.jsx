import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="container is-fluid">
          <nav className="level is-mobile">
            {/* <!-- Left side --> */}
            <div className="level-left">
              <div className="level-item">
                <Link to="/">
                  <p className="subtitle is-5">
                    <strong>SpaceX</strong> Cadet
                  </p>
                </Link>
              </div>
              <div className="level-item">
                <div className="field has-addons">
                  {this.props.loading ? (
                    <>{this.showLoadingScreen()}</>
                  ) : (
                    <>
                      <p className="control">
                        <input
                          className="input"
                          onBlur={this.props.blur}
                          onChange={this.props.handleInputChange}
                          type="text"
                          placeholder="Find a launch"
                        />
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* <!-- Right side --> */}
            <div className="level-right">
              <Link to="/">
                <img
                  className=" is-rounded image is-96x96"
                  src="https://seekvectorlogo.com/wp-content/uploads/2017/12/spacex-vector-logo.png"
                  alt="SPACEX"
                />
              </Link>
              <p className="level-item">
                <Link to={`/all-launches`}>All Launches</Link>
              </p>
              <p className="level-item">
                <Link to="/random-launch">Random</Link>
              </p>
              <p className="level-item">
                <Link to="/feeling-spacey">I'm Feeling Spacey</Link>
              </p>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
