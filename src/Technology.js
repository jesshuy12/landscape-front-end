import React from 'react';
import './App.css';
import Nav from './Nav'
import { Image } from 'semantic-ui-react'

class Technology extends React.Component {

  render() {
    return(
      <div className="technology-page">
        <div className="tp-left-main">
          <div className="front-end-stuff">
            <Image className="about-pic-1" src="./react.png" size='small' circular />
            <br/>
            <br/>
            <div className="about-text">
              <h1>FRONT-END</h1>
              <h1>ReactJS</h1>
            </div>
          </div>
          <div className="back-end-stuff">
            <Image className="about-pic-1" src="./ruby.png" size='small' circular />
            <br/>
            <br/>
            <br/>
            <div className="about-text">
              <h1>BACK-END</h1>
              <h1>RUBY ON RAILS</h1>
            </div>
          </div>
          <div className="design-stuff">
            <Image className="about-pic-1" src="./style.png" size='small' circular />
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="about-text">
              <h1>STYLING</h1>
              <h1>CUSTOM CSS</h1>
            </div>
          </div>
          <div className="extra-stuff">
            <Image className="about-pic-1" src="./jessysface.png" size='small' circular />
            <br/>
            <br/>
            <div className="about-text">
              <h1>MY FACE AGAIN</h1>
              <h1>YES</h1>
            </div>
          </div>
        </div>
        <div className="tp-right-main">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }

}

export default Technology;
