import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/styles.scss';

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="nav">
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Nav