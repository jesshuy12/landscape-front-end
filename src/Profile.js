import React from 'react';
import './App.css';
import Nav from './Nav'
import UploadImage from './UploadImage'
import Portfolio from './Portfolio'
import { Image, Icon, Button } from 'semantic-ui-react'
import UserPreviewCard from './UserPreviewCard'

class Profile extends React.Component {

  renderSkills = () => {
    return this.props.currentUser.skills.map(skill => {
      return skill.name
    })
  }

  render() {
    console.log(this.props.currentUser)
    return (
       this.props.currentUser ?
       <div className="user-page">
         <div className="up-left-main-container">
           <div className="up-user-info-container">
             <div className="up-user-info-left">
              <Image src='/jessyface.png' size='medium' circular />
             </div>
             <div className="up-user-info-right">
              <div className="up-name-section">
                <h1 className="user-name">{this.props.currentUser.name}</h1>
              </div>
              <div className="up-other-section">
                <div className="follower-count-box">
                <h2 className="follower-count-number">Followers - {this.props.currentUser.follower_count}</h2>
                </div>
                <div className="location-box">
                  <h2 className="location-text"><Icon name='map pin' />{this.props.currentUser.location}</h2>
                </div>
                <div className="instagram-box">
                  <Button color='instagram' size='big'>
                    <Icon name='instagram' /> Instagram
                  </Button>
                </div>
              </div>
             </div>
           </div>
           <div className="up-user-portfolio-container">
            <div className="top-portfolio-container">
            <h2 className="portfolio-text">PORTFOLIO</h2>
            <UploadImage currentUser={this.props.currentUser}/>
            </div>
            <Portfolio />
           </div>
         </div>
         <div className="up-right-main-container">
           <Nav signOut={this.props.signOut}/>
         </div>
         </div>
      :
      <div>
      <p>Please Login</p>
      </div>
    )
  }

}

export default Profile;
