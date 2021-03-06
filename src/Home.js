import React from 'react';
import './App.css';
import { Button, Header, Modal, Input, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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

  handleSubmit = (e) => {
    e.preventDefault()
    this.close()
    const user = {username: this.state.username, password: this.state.password}
    this.props.login(user)
    this.setState({
      username: "",
      password: "",
    })
  }

  render() {
    const { open, dimmer } = this.state
    return (
      <div className="home-page">
        <h1 className="title">LANDSCAPE</h1>
        <div className="nav">
          <ul className="starting-menu">
            <a onClick={this.show('blurring')}>Sign In</a>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/community'>Community</Link>
            <Link to='/technology'>Technology</Link>
            <Link to='/about'>About</Link>
          </ul>
          <p>Made with ❤️ by Jessy</p>
        </div>
        <div className="login-modal">
        <Form>
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header className="modal-header">Landscape</Modal.Header>
            <Modal.Content className='modal-content'>
              <Modal.Description>
                <Input onChange={this.usernameHandleChange} value={this.state.username} className="username-login-input" focus placeholder='Username..' />
                <Header className="password-login-text"></Header>
                <Input onChange={this.passwordHandleChange} value={this.state.password} type="password" className="password-login-input" focus placeholder='Password..' />
                <br/>
                <br/>
                <p className="modal-extra-text">Not registered? {<a><Link to='/signup'>Sign-Up</Link></a>} now!</p>
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
                onClick={this.handleSubmit}
              />
            </Modal.Actions>
          </Modal>
          </Form>
        </div>
      </div>
    )
  }

}

export default Home;
