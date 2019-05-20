import React from 'react';
import './App.css';
import Nav from './Nav'
import UploadImage from './UploadImage'
import Portfolio from './Portfolio'
import { Grid, Image, Card, Icon } from 'semantic-ui-react'

class Profile extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="user-page">

        <div className="up-left-main-container">
          <div className="up-user-info-container">
          </div>
          <div className="up-user-portfolio-container">
          <Portfolio />
          </div>
        </div>

        <div className="up-right-main-container">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }

}

export default Profile;
