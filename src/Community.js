import React from 'react';
import './App.css';
import UserPreviewCard from './UserPreviewCard'
import Nav from './Nav'

class Community extends React.Component {

  renderEachUser = () => {
    return this.props.community.map(user => {
      return <UserPreviewCard user={user}/>
    })
  }

  render() {
    console.log(this.props)
    return(
      <div className="community-page">
        <div className="cp-left-main-container">
        <h1>left</h1>
        </div>
        <div className="cp-right-main-container">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }

}

export default Community;
