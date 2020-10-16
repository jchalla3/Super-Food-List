import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}, write away...</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>
                ADD NOTE
            </NavLink>
        </div>
        :
        <div>
            <NavLink exact to='/login'>
                Log In
              </NavLink>
              &nbsp; &nbsp; &nbsp;
            <NavLink exact to='/signup'>
                Sign Up
            </NavLink>
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;