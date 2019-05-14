import React from 'react';
import './App.css';
import { Button, Image, Header, Modal, Input } from 'semantic-ui-react'

class Home extends React.Component {

  state = {
    open: false,
    username: "",
    password: "",
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  usernameHandleChange = (e) => {
    this.setState ({
      username: e.target.value
    })
  }

  passwordHandleChange = (e) => {
    this.setState ({
      password: e.target.value
    })
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
            <Modal.Header className="modal-header">Landscape</Modal.Header>
            <Modal.Content className='modal-content'>
              <Modal.Description>
                <Input onChange={this.usernameHandleChange} value={this.state.username} className="username-login-input" focus placeholder='Username..' />
                <Header className="password-login-text"></Header>
                <Input onChange={this.passwordHandleChange} value={this.state.password} className="password-login-input" focus placeholder='Password..' />
                <br/>
                <br/>
                <p className="modal-extra-text">Not registered? Sign-Up now!</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Back
              </Button>
              <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content="Sign In"
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
