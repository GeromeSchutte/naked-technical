import React from 'react';
import './Header.scss';

const Header = ({basketCount}) => {
    return <nav className="header">
        <button className="hamburger"/>
        <h1>&#xe903;</h1>
        <button className="basket-indicator">
            <div className="icon">&#xe902;</div>
            <span>Basket</span>
            <div className="basket-count">{basketCount ?? 0}</div>
        </button>
    </nav>;
};

export default Header;