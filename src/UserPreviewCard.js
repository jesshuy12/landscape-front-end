import React from 'react';
import './App.css';
import { Button, Card, Image } from 'semantic-ui-react'

class UserPreviewCard extends React.Component {

  render() {
    return (
      <div className="preview-card-container">
        <Card className="user-preview-card">

        <div className="pc-photo-container">
          <div className="left-half" background="">
          </div>
          <div className="right-half">
          </div>
        </div>

        <div className="pc-user-info">
          <Image className="preview-card-profile-pic" floated='left' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>{this.props.user.name}</Card.Header>
          <Card.Meta>Photographer</Card.Meta>
          <Button circular color='facebook' icon='user' />
          <Button circular color='twitter' icon='instagram' />
        </div>

        </Card>
      </div>
    )
  }

}

export default UserPreviewCard;
