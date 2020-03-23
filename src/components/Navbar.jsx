import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container is-fluid">
                    <nav className="level is-mobile">
                        {/* <!-- Left side --> */}
                        <div className="level-left">
                            <div className="level-item">
                                <p className="subtitle is-5">
                                    <strong>SpaceX</strong> Launch
                                </p>
                            </div>
                    <div className="level-item">
                        <div className="field has-addons">
                            <p className="control">
                                <input className="input" type="text" placeholder="Find a launch" />
                            </p>
                            <p className="control">
                                <button className="button">
                                    Search
                                </button>
                            </p>
                    </div>
            </div>
        </div>

  {/* <!-- Right side --> */}
  <div className="level-right">
    <Link to='/'><img className=" is-rounded image is-96x96" src='https://seekvectorlogo.com/wp-content/uploads/2017/12/spacex-vector-logo.png' alt='NASA'/></Link>
    <p className="level-item"><Link to='/newest-uploads'>Latest Launches</Link></p>
    <p className="level-item"><Link to="/all-launches">Upcoming Launches</Link></p>
    <p className="level-item"><Link to='/'>Random Launch</Link></p>
    {/* <p className="level-item"><Link to='/' className="button is-success">New</Link></p> */}
  </div>
</nav>
                </div>
            </div>
        );
    }
}

export default Navbar;