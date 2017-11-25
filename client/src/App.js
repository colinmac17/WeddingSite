import React, { Component } from 'react';
import { SmallTitle, HR, DateOfWedding, NavLink, NavLinks } from './Styles';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import { MediaBox, Row, Col } from 'react-materialize'; 
 
class App extends Component {
  render() {
    return (
      <div className="container main">
      <DateOfWedding color="#3e3e3e">06/16/2018</DateOfWedding>
      <Row>
        <Col m={6} xs={12}>
          <MediaBox className="responsive-img valign-wrapper box-img" src="http://res.cloudinary.com/soccerresume/image/upload/v1511554306/19466684_10155367133154471_1051912402270484828_o_sfrnfb.jpg" caption="Wine Tasting at Chateau Chantal in Traverse City Michigan, Summer 2017" height="600" width="600"/>
        </Col>
        <Col m={6} xs={12}>
          <SmallTitle>Our Story</SmallTitle>
          <HR borderBottom="3px solid #3e3e3e" />
          <p>We first met during in May of 2014 while staying in Ann Arbor for the Spring Term. Kelsey lived in the house across the street from me on Greenwood Ave. for the summer, which happened to be a mutual friends home. At first we were just friends, and actually we always joke how we didn't really even like eachother. However, by the end of the summer, I was constantly going to visit her at work and going on coffee dates in the mornings. The rest is history! </p>
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
          <p>We had talked about getting married someday for sometime and while we were not shy about the subject, Kelsey always joked that I cannot propose to her on our Europe trip. So, in perfect Colin fasion, I decided to Propse to her in Europe on our first full day on the trip. I really wanted the rest of the trip to be a celebration and the stress to be off my back. I did my best to make it the perfect moment for her - I made sure no one was around, that it was a beautiful day in a romantic setting and that I got a picture! I actually ended up setting up my phone and recording the whole thing. This was the most perfect moment in our lives together so far.</p>
          <br/>
          <Link to="/details" className="btn waves">Wedding Details</Link>
        </Col>
      </Row>
      </div>
    );
  }
}

export default App;
