import React from 'react';
import { NavLinks, NavLink, MainTitle, HR, DateOfWedding } from './Styles'; 
import { Link } from 'react-router-dom';
import RemainingDays from './RemainingDays'
import { Row, Col } from 'react-materialize';
var scrollToElement = require('scroll-to-element');

const handleClick = (id) => {
    scrollToElement(id, {
        offset: 0,
        duration: 500
    });
}

const Nav = () => {
    return (
        <div className="container nav">
            <MainTitle className="center-align colin-and-kelsey"><Link to="/" className="nav-links">Colin and Kelsey</Link></MainTitle>
            <DateOfWedding color="#3e3e3e">June 16, 2018</DateOfWedding>
            <div id="nav-container">
            <NavLinks clasName="nav-links-ul">
                <NavLink color="transparent"><Link onClick={handleClick('#home')} className="nav-links hoverable" to="/">Home</Link></NavLink>
                <NavLink color="transparent"><Link onClick={handleClick('#details')} className="nav-links hoverable" to="/details">Details</Link></NavLink>
                <NavLink color="transparent"><Link onClick={handleClick('#photos')} className="nav-links hoverable" to="/photos">Photos</Link></NavLink>
                {/* <NavLink color="transparent"><Link onClick={handleClick('#rsvp')} className="nav-links hoverable" to="/rsvp">RSVP</Link></NavLink> */}
                <NavLink color="transparent"><Link onClick={handleClick('#registry')} className="nav-links hoverable" to="/registry">Registry</Link></NavLink>
            </NavLinks>
                <Row>
                    <Col xs={12}>
                        <img className="responsive-img" src="https://res.cloudinary.com/soccerresume/image/upload/v1517191903/KelseyColinEngagemen-449-min_ce1ayt.jpg"/>
                    </Col>
                </Row>
                <RemainingDays/>
            </div>
            <br/>
        </div>
    )
}

export default Nav;