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
       <h2 className="location-text"><Icon name='location arrow'/>{this.state.selectedUser.location}</h2>
     </div>
     <div className="instagram-box">
       <a href={`//instagram.com/${this.state.selectedUser.instagram_handle}`} target="_blank" ><Button color='instagram' size='big'>
         <Icon name='instagram' /> Instagram
       </Button></a>
     </div>
   </div>

   <Link to={`/users/${this.props.user.id}`}><Button circular color='facebook' icon='user' /></Link>
   <Button circular color='twitter' icon='instagram' />



   let newArray = photos.map(photo => {
     return photo.src
   })

   state = {
     photoIndex: 0,
     isOpen: false,
   }


       const { photoIndex, isOpen } = this.state;


   {isOpen && (
       <Lightbox
         mainSrc={newArray[photoIndex]}
         nextSrc={newArray[(photoIndex + 1) % newArray.length]}
         prevSrc={newArray[(photoIndex + newArray.length - 1) % newArray.length]}
         onCloseRequest={() => this.setState({ isOpen: false })}
         onMovePrevRequest={() =>
           this.setState({
             photoIndex: (photoIndex + newArray.length - 1) % newArray.length,
           })
         }
         onMoveNextRequest={() =>
           this.setState({
             photoIndex: (photoIndex + 1) % newArray.length,
           })
         }
       />
     )
   }


   const photos = [
     {
       src: "https://source.unsplash.com/EOnlL3L3IgQ/600x799",
       width: 3,
       height: 4
     },
     {
       src: "https://source.unsplash.com/UuoovtKdlLA/600x799",
       width: 3,
       height: 4
     },
     {
       src: "https://source.unsplash.com/_aE8ainPt7M/600x799",
       width: 3,
       height: 4
     },
     {
       src: "https://source.unsplash.com/vpHCfunwDrQ/800x599",
       width: 4,
       height: 3
     },
     {
       src: "https://source.unsplash.com/r1nxlNo-v4I/600x799",
       width: 3,
       height: 4
     },
     {
       src: "https://source.unsplash.com/Uu2FsN_8r88/800x599",
       width: 4,
       height: 3
     },
     {
       src: "https://source.unsplash.com/2A95bKGQmXY/600x799",
       width: 3,
       height: 4
     },
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 800,
      height: 600
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
   ]
