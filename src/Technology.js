import React from 'react';
import './App.css';
import Nav from './Nav'

class Technology extends React.Component {

  render() {
    return(
      <div className="technology-page">
        <div className="tp-left-main">
          <p>Under Construction...please come back later</p>
        </div>
        <div className="tp-right-main">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }

}

export default Technology;
