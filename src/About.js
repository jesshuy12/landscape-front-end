import React from 'react';
import Nav from './Nav'

class About extends React.Component {

  render() {
    return (
      <div className="technology-page">
        <div className="tp-left-main">
            <div className="about-upper-left-container">
              <div className="built-by">
              </div>
              <div className="styled-by">
              </div>
              <div className="jessy-info">
              </div>
            </div>
            <div className="about-lower-left-container">
            </div>
        </div>
        <div className="tp-right-main">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }

}

export default About;
