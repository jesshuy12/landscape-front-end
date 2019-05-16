import React from 'react';
import './App.css';
import Nav from './Nav'
import { Grid, Image, Card, Icon } from 'semantic-ui-react'

class Profile extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="user-page">
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={2}>
            <Card className="profile-card">
              <Image className="profile-pic" src='/jessy.jpg' />
              <Card.Content>
                <Card.Header></Card.Header>
                <Card.Description>
                  Photographer
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  1M+ Followers
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'  />
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'  />
          </Grid.Column>
          <Grid.Column width={2}>
            <Nav />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }

}

export default Profile;
