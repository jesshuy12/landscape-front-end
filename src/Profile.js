import React from 'react';
import './App.css';
import Nav from './Nav'
import Portfolio from './Portfolio'
import { Grid, Image, Card, Icon } from 'semantic-ui-react'

class Profile extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="user-page">
      {this.props.currentUser ?
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={2}>
            <Card className="profile-card">
              <Image className="profile-pic" src='/jessy.jpg' />
              <Card.Content>
                <Card.Header>{this.props.currentUser.name}</Card.Header>
                <Card.Description>
                  Photographer
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  {this.props.currentUser.follower_count}
                </a>
              </Card.Content>
            </Card>
            <Portfolio />
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'  />
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'  />
          </Grid.Column>
          <Grid.Column width={2}>
            <Nav signOut={this.props.signOut}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      :
      <div>
      <p>loading..</p>
      </div>
      }
      </div>
    )
  }

}

export default Profile;
