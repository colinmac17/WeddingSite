import React from 'react';
import { NavLinks, NavLink, MainTitle, HR } from './Styles'; 
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="container">
            <MainTitle className="center-align colin-and-kelsey"><Link to="/" className="nav-links">Colin and Kelsey</Link></MainTitle>
            <NavLinks>
                <NavLink color="#046487"><Link className="nav-links hoverable" to="/">Home</Link></NavLink>
                <NavLink color="slategray"><Link className="nav-links hoverable" to="/details">Details</Link></NavLink>
                <NavLink color="black"><Link className="nav-links hoverable" to="/rsvp">RSVP</Link></NavLink>
                <NavLink color="goldenrod"><Link className="nav-links hoverable" to="/register">Register</Link></NavLink>
            </NavLinks>
            <br/>
            <HR borderBottom="3px solid slategray"/>
        </div>
    )
}

export default Nav;