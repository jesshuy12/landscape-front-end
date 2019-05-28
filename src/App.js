import React from 'react';
import './App.css';
import Home from './Home'
import Profile from './Profile'
import Signup from './Signup'
import { Route, Switch, withRouter } from 'react-router-dom'
import NoPath from './NoPath'
import About from './About'
import Community from './Community'
import Technology from './Technology'
import Explore from './Explore'

class App extends React.Component {

  state = {
    currentUser: null,
    community: [],
  }

////////////////////////////////////////////////////////////////////////////////

  componentDidMount() {
    const userID = localStorage.getItem("user_id")
    if (userID) {
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": userID
        }
      })
      .then(res => res.json())
      .then((response) => {
        this.setState({
          currentUser: response
        })
      })
    }
    this.getAllUsers()
  }

////////////////////////////////////////////////////////////////////////////////

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      localStorage.setItem("user_id", this.state.currentUser.id)
      this.props.history.push(`/users/${this.state.currentUser.id}`)
    })
  }

  createUser = (user) => {
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      body: user,
    })
    .then(res => res.json())
    .then(response => {
      this.setCurrentUser(response)
      this.setState ({
        community: [...this.state.community, response]
      })
    })
  }

//LOGIN & SIGNOUT //////////////////////////////////////////////////////////////

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

  signOut = () => {
    localStorage.clear();
    this.setState({
      currentUser: null
    })
  }

////////////////////////////////////////////////////////////////////////////////

  getAllUsers = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(response => {
      this.setState({
        community: response
      })
    })
  }

////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/explore' render={() => <Explore signOut={this.signOut}/> } />
        <Route path='/technology' render={() => <Technology signOut={this.signOut}/> } />
        <Route path='/community' render={() => <Community community={this.state.community} signOut={this.signOut}/> } />
        <Route exact path='/users/:id' render={(routeProps) => { return <Profile {...routeProps} currentUser={this.state.currentUser} signOut={this.signOut} /> }} />
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
