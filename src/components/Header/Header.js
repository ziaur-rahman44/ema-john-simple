import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage inventory</a>
            </nav>
        </div>
    );
}

export default Header;