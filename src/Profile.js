import React from 'react';
import './App.css';
import Nav from './Nav'
import UploadImage from './UploadImage'
import Portfolio from './Portfolio'
import { Image, Icon, Button } from 'semantic-ui-react'
import UserPreviewCard from './UserPreviewCard'

class Profile extends React.Component {

  state = {
    selectedUser: {}
  }

  renderSkills = () => {
    return this.props.currentUser.skills.map(skill => {
      return skill.name
    })
  }

  fetchSelectedUser = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(response => {
      const user = response.find(user => {
        return user.id === parseInt(this.props.match.params.id)
      })
      this.setState({
        selectedUser: user
      })
    })
  }

  componentDidMount() {
    this.fetchSelectedUser()
  }

  render() {
    return (
       this.props.currentUser ?
       <div className="user-page">
         <div className="up-left-main-container">
           <div className="up-user-info-container">
             <div className="up-user-info-left">
              <Image src={this.state.selectedUser.avatar} size='medium' circular />
             </div>
             <div className="up-user-info-right">
              <div className="up-name-section">
                <h1 className="user-name">{this.state.selectedUser.name}</h1>
              </div>
              <div className="up-other-section">
                <div className="follower-count-box">
                <h2 className="follower-count-number">Followers - {this.state.selectedUser.follower_count}</h2>
                </div>
                <div className="location-box">
                  <h2 className="location-text"><Icon name='map pin' />{this.state.selectedUser.location}</h2>
                </div>
                <div className="instagram-box">
                  <a href={`//instagram.com/${this.state.selectedUser.instagram_handle}`} target="_blank" ><Button color='instagram' size='big'>
                    <Icon name='instagram' /> Instagram
                  </Button></a>
                </div>
              </div>
             </div>
           </div>
           <div className="up-user-portfolio-container">
            <div className="top-portfolio-container">
            <h2 className="portfolio-text">PORTFOLIO</h2>
            {this.state.selectedUser.id === this.props.currentUser.id ?
            <UploadImage currentUser={this.props.currentUser}/> : null }
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
