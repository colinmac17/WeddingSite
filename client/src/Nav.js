import React from 'react';
import { NavLinks, NavLink, MainTitle, HR } from './Styles'; 
import { Link } from 'react-router-dom';
import RemainingDays from './RemainingDays'
import { Row, Col } from 'react-materialize';

const Nav = () => {
    return (
        <div className="container">
            <RemainingDays/>
            <MainTitle className="center-align colin-and-kelsey"><Link to="/" className="nav-links">Colin and Kelsey</Link></MainTitle>
            <NavLinks>
                <NavLink color="transparent"><Link className="nav-links hoverable" to="/">Home</Link></NavLink>
                <NavLink color="transparent"><Link className="nav-links hoverable" to="/details">Details</Link></NavLink>
                <NavLink color="transparent"><Link className="nav-links hoverable" to="/photos">Photos</Link></NavLink>
                <NavLink color="transparent"><Link className="nav-links hoverable" to="/rsvp">RSVP</Link></NavLink>
                <NavLink color="transparent"><Link className="nav-links hoverable" to="/registry">Registry</Link></NavLink>
            </NavLinks>
            <br/>
            <HR borderBottom="3px solid slategray"/>
        </div>
    )
}

export default Nav;