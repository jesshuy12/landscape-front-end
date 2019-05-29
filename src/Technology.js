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
              <br/>
              <h2>ReactJS</h2>
              <h2>+</h2>
              <h2>JavaScript</h2>
            </div>
          </div>
          <div className="back-end-stuff">
            <Image className="about-pic-1" src="./ruby.png" size='small' circular />
            <br/>
            <br/>
            <br/>
            <div className="about-text">
              <h1>BACK-END</h1>
              <br/>
              <h2>Ruby on Rails</h2>
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
              <br/>
              <h2>Custom CSS</h2>
              <h2>+</h2>
              <h2>Semantic UI</h2>
            </div>
          </div>
          <div className="extra-stuff">
            <Image className="about-npm" src="./npm.jpg" size='small' circular />
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="about-text">
              <h1>NPM</h1>
              <br/>
              <h2>React Gallery</h2>
              <h2>+</h2>
              <h2>React Lightbox</h2>
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
