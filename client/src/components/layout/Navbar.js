import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar-fixed'>
          <div className='nav-wrapper white'>
            <Link 
              to='/'
              style={{
                fontFamily: 'monospace'
              }}
              className='col s5 brand-logo cener black-text'>
              <i className='material-icons'>code</i>{/*airbnb style guide says always self close tags that dont have children*/}
              </Link>
              FETUS
          </div>
        </nav> 
      </div>
    )
  }
}

export default Navbar;