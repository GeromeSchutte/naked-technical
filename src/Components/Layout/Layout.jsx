import React from 'react';
import Header from '../Header/Header';
import './Layout.scss';

const Layout = (props) => {
    return <section className="layout">
        <div className="spacer"/>
        <Header basketCount={props.basketCount}/>
        <section className="page-content">
            {props.children}
        </section>
    </section>;
};

export default Layout;