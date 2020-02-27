import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';
// components
import Navbar from './components2/Navbar';
import AllLaunches from './components2/AllLaunches';
import LaunchDetails from './components2/LaunchDetails';
import RandomLaunch from './components2/RandomLaunch';
import FeelingSpacey from './components2/FeelingSpacey';
import Hero from './components2/Hero';
import Footer from './components2/Footer';
// import FilteredLaunches from './components2/FilteredLaunches';
import Bulma from '../node_modules/bulma';

export default class App extends Component {

  state = {
    allLaunches: [],
    ready: false,
    focus: false
  }

  async componentDidMount(){
    let allLaunches = await axios.get(`https://api.spacexdata.com/v3/launches/past`)//This takes some time by the time it gets back 
        console.log(allLaunches.data)

    this.setState({
      allLaunches: allLaunches.data,
      ready: true,
    })
}

focus = () => {
  this.setState({focus: !this.state.focus});
};

blur = () => {
  this.setState({focus: false });
};

handleInputChange = e => {
  console.log(e.target.value);

  this.filterTheLaunches(e.target.value);
  this.setState({
    query: e.target.value,
    focus: true
  });
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
  return this.state.filteredLaunches.splice(0,4).map(eachLaunch => {
    
    console.log(eachLaunch)
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
                <Link to={`/all-launches/${eachLaunch.mission_name}`} >
                  <p className="title is-4">{eachLaunch.mission_name}</p>
                </Link>
                <p className="subtitle is-6">
                  {eachLaunch.rocket.rocket_name}
                </p>
              </div>
            </div>
            <div className="content">
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
      <div key={this.state.ready}>
          <Navbar
            handleInputChange={this.handleInputChange}
            loading={this.state.loading}
            focus={this.focus}
            blur={this.blur}
            allLaunches={this.state.allLaunches}
          />
          {this.state.focus ? this.showFilteredLaunches() : ""}
        
        <Switch>
          <Route exact path="/all-launches" render={props => <AllLaunches {...props} ready={this.state.ready} allLaunches={this.state.allLaunches}/>}/>
          <Route exact path="/all-launches/:launchName" render={props => <LaunchDetails {...props} ready={this.state.ready} allLaunches={this.state.allLaunches}/>}/>
          <Route exact path="/random-launch" render={props => <RandomLaunch {...props} ready={this.state.ready} allLaunches={this.state.allLaunches}/>}/>
          <Route exact path="/feeling-spacey" render={props => <FeelingSpacey {...props} ready={this.state.ready} allLaunches={this.state.allLaunches}/>}/>
          {/* <Route exact path="/filtered-launches" render={props => <FilteredLaunches {...props} ready={this.state.ready} allLaunches={this.state.allLaunches}/>}/> */}
        </Switch>
        <Hero />
        <Footer />
      </div>
    )
  }
}
