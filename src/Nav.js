import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

class Nav extends React.Component {

  render() {
    return (
           <div className="nav-general">
              <ul className="starting-menu">
                <a><Icon name='user' /> Profile</a>
                <Link to='/community'><Icon name='search' /> Search</Link>
                <Link to='/'><Icon name='save' /> Saved</Link>
                <Link to='/'><Icon name='facebook messenger' /> Messages</Link>
                <Link to='/' onClick={() => this.props.signOut()}><Icon name='sign out' /> Sign Out</Link>
                <Link to='/about'><Icon name='info' /> About</Link>
              </ul>
                <p>Made with ❤️ by Jessy</p>
            </div>
    )
  }

}

export default Nav;
