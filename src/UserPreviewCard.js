import React from 'react';
import './App.css';
import { Button, Card, Image } from 'semantic-ui-react'

class UserPreviewCard extends React.Component {

  render() {
    console.log(this.props.user)
    return (
      <div>
        <Card className="user-preview-card">
          <Card.Content>
            <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
            <Card.Header>{this.props.user.name}</Card.Header>
            <Card.Meta>{this.props.user.name.skills} hello</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }

}

export default UserPreviewCard;
