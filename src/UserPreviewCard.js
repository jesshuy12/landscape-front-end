import React from 'react';
import './App.css';
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class UserPreviewCard extends React.Component {

  getImage1 = () => {
    return this.props.user.images.slice(0,1).map(photo => {
      return photo.src
    })
  }

  getImage2 = () => {
    return this.props.user.images.slice(1,2).map(photo => {
      return photo.src
    })
  }

  render() {
    return (
      <div className="preview-card-container">
        <Card className="user-preview-card">

        <div className="pc-photo-container">
          <div className="left-half">
            <Image src={this.getImage1()} size='medium'/>
          </div>
          <div className="right-half">
          <Image src={this.getImage2()} size='medium'/>
          </div>
        </div>

        <div className="pc-user-info">
          <Image className="preview-card-profile-pic" size='tiny' src={this.props.user.avatar} circular/>
        </div>
        <div className="pc-user-info-2">
          <p className="pc-user-name">{this.props.user.name}</p>
          <Link to={`/users/${this.props.user.id}`} className="pc-profile-btn"><Button circular color='facebook' icon='user'/></Link>
          <a className="pc-insta-btn" href={`//instagram.com/${this.props.user.instagram_handle}`} target="_blank" ><Button circular color='instagram' icon='instagram'/></a>
        </div>


        </Card>
      </div>
    )
  }

}

export default UserPreviewCard;
