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
                <a><Link to='/'><Icon name='search' /> Search</Link></a>
                <a><Link to='/'><Icon name='save' /> Saved</Link></a>
                <a><Link to='/'><Icon name='facebook messenger' /> Messages</Link></a>
                <a><Link to='/'><Icon name='sign out' /> Sign Out</Link></a>
                <a><Link to='/about'><Icon name='info' /> About</Link></a>
              </ul>
                <p>Made with ❤️ by Jessy</p>
            </div>
    )
  }

}

export default Nav;
