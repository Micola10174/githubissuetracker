import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <NavLink to="/">
                    <img src={logo} name="logo" className="logo" />
                </NavLink>
                <p>Github Issue Tracker</p>
            </div>
        </header>
    )
}

export default Header;
