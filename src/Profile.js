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
    // currentUser: this.props.currentUser
  }

  renderSkills = () => {
    return this.props.currentUser.skills.map(skill => {
      return <p>{skill.name}</p>
    })
  }

  fetchSelectedUser = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(response => {
      const user = response.find(user => {
        // debugger
        return user.id === parseInt(this.props.match.params.id)
      })
      this.setState({
        selectedUser: user
      }, () => console.log("STATE IS", this.state))
    })
  }

  componentDidMount() {
    this.fetchSelectedUser()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps!==this.props.match.params.id) {
      this.fetchSelectedUser()
      // this.setState({
      //
      // })
    }
  }


  render() {
    console.log(this.state.selectedUser)
    return (
       this.props.currentUser ?
       <div className="user-page">

         <div className="up-left-main-container">

           <div className="up-user-info-container">
            <Image src={this.state.selectedUser.avatar} size='small' circular />
            <p className="user-name">{this.state.selectedUser.name}</p>
            <p className="location-text"><Icon name='location arrow' /> {this.state.selectedUser.location}</p>
            <a className="insta_button" href={`//instagram.com/${this.state.selectedUser.instagram_handle}`} target="_blank" ><Button color='instagram' size='small'>
              <Icon name='instagram' /> Instagram
            </Button></a>
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
