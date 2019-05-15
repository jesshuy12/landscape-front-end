import React from 'react';
import './App.css';
import Home from './Home'
import User from './User'
import Signup from './Signup'
import { Route, Switch } from 'react-router-dom'
import NoPath from './NoPath'
import About from './About'

class App extends React.Component {

  state = {
    currentUser: null
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
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
      this.setCurrentUser(response)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Switch>
        <Route path='/about' render={() => <About /> } />
        <Route path='/signup' render={() => <Signup createUser={this.createUser}/> } />
        <Route exact path='/' render={() => <Home setCurrentUser={this.setCurrentUser} login={this.login}/> }/>
        <Route component={ NoPath } />
      </Switch>
      </div>
    )
  }

}

export default App;
