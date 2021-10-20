import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white'
    }
    return (
        <nav>

            <Link to="/">
            <h1>🥂</h1>
            </Link>
            <ul className="nav-links">
                <Link to="/" style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/Recipes" style={navStyle}>
                    <li>Recipes</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
