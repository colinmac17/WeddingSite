import React from 'react';
import { NavLinks, NavLink, Title, HR } from './Styles'; 
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="container">
            <Title className="center-align"><Link to="/" className="nav-links">Colin and Kelsey</Link></Title>
            <NavLinks>
                <NavLink color="#046487"><Link className="nav-links" to="/">Home</Link></NavLink>
                <NavLink color="slategray"><Link className="nav-links" to="/details">Details</Link></NavLink>
                <NavLink color="black"><Link className="nav-links" to="/rsvp">RSVP</Link></NavLink>
                <NavLink color="goldenrod"><Link className="nav-links" to="/register">Register</Link></NavLink>
            </NavLinks>
            <br/>
            <HR borderBottom="3px solid slategray"/>
        </div>
    )
}

export default Nav;