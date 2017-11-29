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
          <MediaBox className="responsive-img valign-wrapper box-img" src="http://res.cloudinary.com/soccerresume/image/upload/v1511554305/10849051_10152960174027474_4471679024365864095_o_tgsrne.jpg" caption="Wine Tasting at Chateau Chantal in Traverse City Michigan, Summer 2017" height="600" width="600"/>
        </Col>
        <Col m={6} xs={12}>
          <SmallTitle>Our Story</SmallTitle>
          <HR borderBottom="3px solid #3e3e3e" />
          <p>Colin and Kelsey first met during May of 2014 while staying in Ann Arbor for the Spring Term. Kelsey lived in the house across the street from Colin on Greenwood Ave for the summer, which happened to be a mutual friends home. At first they were just friends, and actually always joked how they didn't really even like eachother. However, by the end of the summer, they were constantly going to visit her at work and going on coffee dates in the mornings. The rest is history! </p>
        </Col>
      </Row>
      <br/><br/>
      <Row>
        <Col m={6} xs={12}>
          <MediaBox className="responsive-img valign-wrapper box-img" src="http://res.cloudinary.com/soccerresume/image/upload/v1511554307/21752502_10155837533852474_4771846688139704683_o_typxmo.jpg" caption="Proposing to Kelsey on the Maria Plains, Salzburg, Austria, September 15, 2017" height="700" width="600"/>
          <MediaBox className="responsive-img valign-wrapper box-img" src="http://res.cloudinary.com/soccerresume/image/upload/v1511554307/21762193_10211133985798000_6311107113758367325_n_oqrh5c.jpg" caption="Just after the big moment, all smiles!" height="600" width="600"/>
        </Col>
        <Col m={6} xs={12}>
          <SmallTitle>The Proposal</SmallTitle>
          <HR borderBottom="3px solid #3e3e3e" />
          <p>Colin and Kelsey had talked about getting married someday for sometime and while they were not shy about the subject, Kelsey always joked that Colin could not propose to her on their planned trip to Europe in September 2017. So in perfect Colin fashion, he decided to propose to her in Europe on their first full day on the trip. He did his best to make it the perfect moment for her - he made sure no one was around, that it was a beautiful day in a romantic setting and that he got a picture! He actually ended up setting up his phone and recording the whole thing. This was the most perfect moment in their lives together so far.</p>
        </Col>
      </Row>
      <br/><br/>
      <Row>
        <Col m={6} xs={12}>
          <img className="responsive-img" src="http://res.cloudinary.com/soccerresume/image/upload/v1511557323/pergola_w9qf8o.jpg"/>
        </Col>
        <Col m={6} xs={12}>
          <SmallTitle>The Wedding</SmallTitle>
          <HR borderBottom="3px solid #3e3e3e" />
          <p>Please join us at Galleria Marchetti on June 16, 2018. Learn more by clicking the button below.</p>
          <br/>
          <Link to="/details" className="btn waves">Wedding Details</Link>
        </Col>
      </Row>
      </div>
    );
  }
}

export default App;
