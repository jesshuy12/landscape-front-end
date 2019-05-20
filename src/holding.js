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
