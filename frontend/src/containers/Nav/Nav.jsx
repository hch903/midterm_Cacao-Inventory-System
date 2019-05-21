import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import './Nav.css';

class Nav extends Component{
    render(){
        return (
            <nav className = 'button_container'>
                <ul>
                    <li className = "home">
                        <NavLink to = "/home">Home</NavLink>
                    </li>
                    <li className = "process">
                        <NavLink to = "/process">Process</NavLink>
                    </li>
                    <li className = "summary">
                        <NavLink to = "/summary">Summary</NavLink>
                    </li>
                    <li className = "search">
                        <NavLink to = "/search">Search</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;