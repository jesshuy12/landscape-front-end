import React from 'react';
import './App.css';
import Home from './Home'
import Profile from './Profile'
import Signup from './Signup'
import { Route, Switch, withRouter } from 'react-router-dom'
import NoPath from './NoPath'
import About from './About'

class App extends React.Component {

  state = {
    currentUser: null
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      this.props.history.push(`/users/${this.state.currentUser.id}`)
    })
  }

  createUser = (user) => {
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }

  login = (user) => {
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json',
        'Accepts': "application/json"
      }
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
      this.setCurrentUser(response)
      }
    })
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/users/:id' render={() => <Profile currentUser={this.state.currentUser}/> } />
        <Route path='/about' render={() => <About /> } />
        <Route path='/signup' render={() => <Signup createUser={this.createUser}/> } />
        <Route exact path='/' render={(routeProps) => { return <Home {...routeProps} setCurrentUser={this.setCurrentUser} login={this.login}/> }}/>
        <Route component={ NoPath } />
      </Switch>
      </div>
    )
  }

}

export default withRouter(App);
