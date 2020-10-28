import React from 'react';
import './Header.scss';

const Header = () => {
    return <nav className="header">
        <btn className="hamburger"/>
        <h1>&#xe903;</h1>
        <btn className="basket-indicator">
            <div className="icon">&#xe902;</div>
            <span>Basket</span>
            <div className="basket-count">0</div>
        </btn>
    </nav>;
};

export default Header;