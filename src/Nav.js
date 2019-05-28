import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

class Nav extends React.Component {

  render() {
    return (
           <div className="nav-general">
              <ul className="starting-menu">
                <Link to={`/users/${localStorage.getItem("user_id")}`}><Icon name='user' /> Profile</Link>
                <Link to='/community'><Icon name='search' /> Search</Link>
                <Link to='/explore'><Icon name='images' /> Explore</Link>
                <Link to='/' onClick={() => this.props.signOut()}><Icon name='sign out' /> Sign Out</Link>
                <Link to='/technology'><Icon name='cog' /> Technology</Link>
                <Link to='/about'><Icon name='info' /> About</Link>
              </ul>
                <p>Made with ❤️ by Jessy</p>
            </div>
    )
  }

}

export default Nav;
