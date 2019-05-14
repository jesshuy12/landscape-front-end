import React from 'react';
import './App.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class Home extends React.Component {

  state = {
    open: false
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  modalHandleChange = () => {
    this.setState((prevState) => ({
      loginModal: !prevState.show
    }))
  }

  render() {
    const { open, dimmer } = this.state
    return (
      <div className="home-page">
        <div className="nav">
          <ul className="starting-menu">
            <p onClick={this.show('blurring')}>Sign In</p>
            <p onClick={() => this.props.handleChangePage("signUpPage")}>Sign Up</p>
            <p onClick={() => this.props.handleChangePage("aboutPage")}>About</p>
          </ul>
          <p>Made with ❤️ by Jessy</p>
        </div>
        <div className="login-modal">
      <Modal dimmer={dimmer} open={open} onClose={this.close}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            Nope
          </Button>
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content="Yep, that's me"
            onClick={this.close}
          />
        </Modal.Actions>
      </Modal>
        </div>
      </div>
    )
  }

}

export default Home;
