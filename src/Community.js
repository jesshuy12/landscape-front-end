import React from 'react';
import './App.css';
import UserPreviewCard from './UserPreviewCard'
import Nav from './Nav'
import { Input } from 'semantic-ui-react'

class Community extends React.Component {

  state = {
    search: ""
  }

  handleSearch = (e) => {
    this.setState ({
      search: e.target.value
    })
  }

  renderEachUser = () => {
    return this.filterUsers().map(user => {
      return <UserPreviewCard user={user}/>
    })
  }

  filterUsers = () => {
    return this.props.community.filter(user => {
      return user.name.toLowerCase().includes(this.state.search)
    })
  }

  render() {
    return(
      <div className="community-page">
        <div className="cp-left-main-container">
          <div className="cp-search-container">
            <Input onChange={this.handleSearch} icon='search' placeholder='Search Artist...' />
            <h1 className="community-count"></h1>
          </div>
          <div className="cp-body-container">
          {this.renderEachUser()}
          </div>
        </div>
        <div className="cp-right-main-container">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }

}

export default Community;
