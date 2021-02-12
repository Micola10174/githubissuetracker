import React from 'react';
import logo from '../../assets/images/logo.png'
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} name="logo" className="logo" />
                <p>Github Issue Tracker</p>
            </div>
        </header>
    )
}

export default Header;
