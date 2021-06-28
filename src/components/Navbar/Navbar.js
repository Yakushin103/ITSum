import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="item">
                <NavLink to="/profile" name="Profile">Profile</NavLink>
            </div>
            <div className="item">
                <NavLink to="/dialogs" name="Message">Messege</NavLink>
            </div>
            <div className="item">
                <NavLink to="/users" name="Message">Users</NavLink>
            </div>
            <div className="item">
                <a name="Music">Music</a>
            </div>
            <div className="item">
                <a name="Settings">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;