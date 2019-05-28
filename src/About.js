import React from 'react';
import Nav from './Nav'
import { Image, Button } from 'semantic-ui-react'

class About extends React.Component {

  render() {
    return (
      <div className="about-page">
        <div className="about-left-main">
            <div className="about-upper-left-container">
              <div className="built-by">
                <Image className="about-pic-1" src="./jessysface.png" size='small' circular />
                <br/>
                <br/>
                <div className="about-text">
                  <h1>CODED & DEVELOPED</h1>
                  <h3>BY</h3>
                  <h1>JESSY HU</h1>
                </div>
                <div className="about-buttons">
                  <a href={`//linkedin.com/in/jessy-hu`} target="_blank" ><Button circular color='linkedin' icon='linkedin' size="big"/></a>
                  <br/>
                  <a href={`//instagram.com/jsy.hu`} target="_blank" ><Button circular color='instagram' icon='instagram' size="big"/></a>
                  <a href={`//github.com/jesshuy12`} target="_blank" ><Button circular color='github' icon='github' size="big"/></a>
                </div>
              </div>
              <div className="styled-by">
                <Image className="about-pic-1" src="./yes.jpg" size='small' circular />
                <br/>
                <br/>
                <div className="about-text">
                  <h1>STYLED & DESIGNED</h1>
                  <h3>BY</h3>
                  <h1>JESSY HU</h1>
                </div>
                <div className="about-buttons">
                  <a href={`//linkedin.com/in/jessy-hu`} target="_blank" ><Button circular color='linkedin' icon='linkedin' size="big"/></a>
                  <br/>
                  <a href={`//instagram.com/jsy.hu`} target="_blank" ><Button circular color='instagram' icon='instagram' size="big"/></a>
                  <a href={`//github.com/jesshuy12`} target="_blank" ><Button circular color='github' icon='github' size="big"/></a>
                </div>
              </div>
            </div>
        </div>
        <div className="about-right-main">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }

}

export default About;
