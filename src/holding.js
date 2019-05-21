<Card.Content>
  <Card.Meta>{this.props.user.name.skills} hello</Card.Meta>
</Card.Content>
<Card.Content extra>
  <Card.Header >{this.props.user.name}</Card.Header>
  <Card.Meta>{this.props.user.name.skills}</Card.Meta>
  <Image className="preview-card-profile-pic" floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
</Card.Content>
<Card.Content extra>
  <div className='ui two buttons'>
    <Button basic color='green'>View Profile</Button>
    <Button basic color='red'>Contact</Button>
  </div>
</Card.Content>



{this.props.currentUser ?
<div>
<p>signed in</p>
</div>
:
<div>
<p>loading..</p>
</div>
}

<div className="user-page">
  <div className="up-left-main-container">
    <div className="up-user-info-container">
      <div className="up-user-info-left">
        <Image className="preview-card-profile-pic" floated='left' size='small' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <h1>{this.props.currentUser.name}</h1>
      </div>
      <div className="up-user-info-right">
      </div>
    </div>
    <div className="up-user-portfolio-container">
    <Portfolio />
    </div>
  </div>
  <div className="up-right-main-container">
    <Nav signOut={this.props.signOut}/>
  </div>
  </div>
