import React, { Component } from 'react';
import { SmallTitle, HR, DateOfWedding, NavLink, NavLinks } from './Styles';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import { MediaBox, Row, Col } from 'react-materialize'; 
 
class App extends Component {
  render() {
    return (
      <div className="container main" id="home">
      <Row>
        <Col m={6} xs={12}>
          <MediaBox className="responsive-img valign-wrapper box-img" src="https://res.cloudinary.com/soccerresume/image/upload/v1511554305/10849051_10152960174027474_4471679024365864095_o_tgsrne.jpg" caption="Pregaming Michigan v Maryland, November, 2014" height="600" width="600"/>
        </Col>
        <Col m={6} xs={12}>
          <SmallTitle>Our Story</SmallTitle>
          <HR borderBottom="3px solid #3e3e3e" />
          <p>Colin and Kelsey met during the summer of 2014 while living across the street from one another in Ann Arbor, Michigan. At first they were just friends, and always joked how they didn't really even like one another! However, by the end of the summer, Colin was constantly visitng Kelsey while she was at work and eventually, asked her on a coffee date. The rest is history! </p>
        </Col>
      </Row>
      <br/><br/>
      <Row>
        <Col m={6} xs={12}>
          <MediaBox id="proposalPic" className="responsive-img valign-wrapper box-img" src="https://res.cloudinary.com/soccerresume/image/upload/v1511554307/21752502_10155837533852474_4771846688139704683_o_typxmo.jpg" caption="Proposing to Kelsey on the Maria Plains, Salzburg, Austria, September 15, 2017" height="700" width="600"/>
        </Col>
        <Col m={6} xs={12}>
          <SmallTitle>The Proposal</SmallTitle>
          <HR borderBottom="3px solid #3e3e3e" />
          <p>Colin and Kelsey knew they wanted to be together forever, and when they began talking about getting engaged, Kelsey had one request, that Colin not propose on their trip to Austria and Italy in September 2018 (she thought it was too predictable!). Colin agreed and promised Kelsey he wouldn't propose on their trip, but realized that it would be the perfect surprise if he did propose after promising he would not. In perfect Colin fashion, he proposed on the first day of their trip, in Salzburg, Austria. Colin and Kelsey were engaged on the Maria Plain, a beautiful, private plain overlooking the Austrian mountains. They celebrated by going to a beer garden before calling family and friends to tell the good news! </p>
        </Col>
      </Row>
      <br/><br/>
      <Row>
        <Col m={6} xs={12}>
          <img className="responsive-img" src="https://res.cloudinary.com/soccerresume/image/upload/v1511557323/pergola_w9qf8o.jpg"/>
        </Col>
        <Col m={6} xs={12}>
          <SmallTitle>The Wedding</SmallTitle>
          <HR borderBottom="3px solid #3e3e3e" />
          <p>Please join us at The Pergola at Galleria Marchetti on June 16, 2018. Learn more by clicking the button below.</p>
          <br/>
          <Link to="/details" className="btn waves">Wedding Details</Link>
        </Col>
      </Row>
      </div>
    );
  }
}

export default App;
