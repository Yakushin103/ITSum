import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // const handeleClick = (name) => {
    //     console.log(name)
    // }
    return (
        <nav className="nav">
            <div className="item">
                <NavLink to="/profile" name="Profile">Profile</NavLink>
            </div>
            <div className="item">
                <NavLink to="/dialogs" name="Message">Messege</NavLink>
            </div>
            <div className="item">
                <a name="News">News</a>
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