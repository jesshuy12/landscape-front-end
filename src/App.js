import React from 'react';
import './App.css';
import Home from './Home'
import User from './User'
import Signup from './Signup'

class App extends React.Component {

  state = {
    currentPage: "home",
    loginModal: false
  }

  handleChangePage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <Home handleChangePage={this.handleChangePage}/>
      case "signUpPage":
        return <Signup />
      case "aboutPage":
        return "about"
      default:
        return null
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    )
  }

}

export default App;
