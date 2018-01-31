import React from 'react';
import {Route,Router,Link } from 'react-router';
import routes from '../routes';
import './menu.css';

export class Menu extends React.Component {
    render () {
        return (
        <nav className="sidenav">
            <ul>
                    <li className="home"><Link to="/Home">Home</Link></li>
                    <li className="list"><a href="#">List</a></li>
                    <li className="rank"><a href="#">Rank</a></li>
                    <li className="play"><Link to="/Stream">Play</Link></li>
                    <li className="search"><span className="search-icon"></span><a href="#">Search</a></li>
            </ul>
        </nav>
        )
    }
}

export default Menu;