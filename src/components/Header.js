import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navb">
                <div className="logo">
                    <h1>Prepquizz</h1>
                </div>
                <div className="header1">
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Compete'>Compete</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Practice'>Practice</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Signup'>Signup</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header;
