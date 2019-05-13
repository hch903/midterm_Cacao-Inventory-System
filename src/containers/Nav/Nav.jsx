import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import './Nav.css';

class Nav extends Component{
    render(){
        return (
            <nav className = 'button_container'>
                <ul>
                    <li className = "home">
                        <a><NavLink to = "/home">Home</NavLink></a>
                    </li>
                    <li className = "process">
                        <a><NavLink to = "/process">Process</NavLink></a>
                    </li>
                    <li className = "summary">
                        <a><NavLink to = "/summary">Summary</NavLink></a>
                    </li>
                    <li className = "search">
                        <a><NavLink to = "/search">Search</NavLink></a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;