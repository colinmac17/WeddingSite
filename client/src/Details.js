import React from 'react';
import { Title, SmallTitle, DetailTitle } from './Styles';
import { Row, Col } from 'react-materialize';
import Map from './Map';

const details = ['Location:- Chicago, IL', 'Venue:- Galleria Marchetti', 'Date:- Saturday June 16, 2018', 'Time:- 430 - 11PM CST', 'Food:- Italian' , 'Beverage:- Open Bar', 'Dancing to follow'];

const detailList = details.map((detail, idx) => {
    const detailArray = detail.split(':');
    const detailTitle = detailArray[0];
    const detailDesc = detailArray[1];
    return <li className="details-li" key={idx}><b className="bold">{detailTitle}</b>{detailDesc}</li>;
});

const Details = () => {
    return (
        <div className="container details" id="details">
            <Title>Details</Title>
            <Row>
                <Col sm={12} md={6}>
                    <ul>
                    {detailList}
                    </ul>
                </Col>
                <Col sm={12} md={6}>
                    <p>Below are some of our favorite restaurants and things to do in the city. We have also highlighted the venue and hotel accomodations for your convenience.</p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={12}>
                    <Map width={1000} height={600}/>
                </Col>
            </Row>
            <Row>
                <SmallTitle>Accomadations <i className="fa fa-bed" aria-hidden="true"></i></SmallTitle>
                <Col s={12}>
                    <ul>
                        <li><DetailTitle>Courtyard Marriott River North/Downtown</DetailTitle> - <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Kelsey%20Kippe%20Colin%20McAtee%20Wedding%20Block%20%5Echiwb%60KMCKMCB%60219%60USD%60false%604%606/15/18%606/17/18%6005/25/18&app=resvlink&stop_mobi=yes" target="_blank">Book</a> <br/>
                        &bull; Reservations can also be made by calling our Marriott Reservation Center toll free at <a href="tel:18003212211">1-800-321-2211</a>.</li>
                        <li><DetailTitle>Marriott River North</DetailTitle> - <a href="https://aws.passkey.com/event/49553968/owner/1361/home" target="_blank">Book</a><br/>
                        &bull; Reservations can also be made by calling our Marriott Reservation Center toll free at <a href="tel:18773030104">1-877-303-0104</a>.</li>   
                    </ul>
                </Col>
            </Row>
            <Row>
            <SmallTitle>Places to Eat <i className="fa fa-cutlery" aria-hidden="true"></i></SmallTitle>
                <Col s={12}>
                    <ul>
                        <li>Here are a few of many amazing restaurants:</li>
                        <li>&bull; <a href="http://auchevalchicago.com/" target="_blank">Au Cheval</a> (Best Burger in Town)</li>
                        <li>&bull; <a href="http://3artsclubcafe.com/" target="_blank">Restoration Hardware</a> (Amazing for brunch and architecture)</li>
                        <li>&bull; <a href="http://www.happycamperchicago.com/" target="_blank">Happy Camper</a> (Fun atmosphere with great pizza and beer)</li>
                        <li>&bull; <a href="http://topogigiochicago.com/" target="_blank">Topo Gigio</a> (Great Italian food in the heart of Old Town)</li>
                        <li>&bull; <a href="http://chicagopizzaandovengrinder.com/" target="_blank">Chicago Pizza and Oven Grinder</a> (Pizza pot pie anyone?)</li>
                        <li>&bull; <a href="https://www.loumalnatis.com/" target="_blank">Lou Malnatis</a> (Original Chicago Deep Dish Pizza)</li>
                    </ul>
                </Col>
            </Row>
            <Row>
            <SmallTitle>Things to Do <i className="fa fa-sun-o" aria-hidden="true"></i></SmallTitle>
                <Col s={12}>
                    <ul>
                        <li>Here are a handful of awesome things to do in Chicago:</li>
                        <li>&bull; Catch a <a href="https://www.mlb.com/cubs/tickets" target="_blank">Cubs Game</a> at Wrigley Field</li>   
                        <li>&bull; Lay out on the beach - Checkout Oak Street, North Ave, and Montrose</li>   
                        <li>&bull; Go see a <a href="http://www.broadwayinchicago.com/shows/" target="_blank">Broadway</a> play</li>   
                        <li>&bull; Take a walk through <a href="https://www.chicagoparkdistrict.com/parks-facilities/lincoln-park" target="_blank">Lincoln Park</a></li>   
                        <li>&bull; Check out <a href="https://navypier.org/" target="_blank">Navy Pier</a></li>   
                        <li>&bull; Check out the <a href="https://www.enjoyillinois.com/explore/listing/chicago-museum-campus" target="_blank">Mueseum Campus</a></li>   
                        <li>&bull; Go beer tasting at <a href="http://www.gooseisland.com/tours" target="_blank">Goose Island</a> or <a href="https://lagunitas.com/taproom/chicago" target="_blank">Lagunitas</a></li>   
                    </ul>
                </Col>
            </Row>
            <Row>
                <SmallTitle>Travel and Transportation <i className="fa fa-suitcase" aria-hidden="true"></i></SmallTitle>
                <Col s={12}>
                    <SmallTitle>By Air <i className="fa fa-plane" aria-hidden="true"></i></SmallTitle>
                    <ul>
                        <li><DetailTitle>O'hare International Airport (ORD)</DetailTitle> - <a href="http://www.flychicago.com/ohare/home/pages/default.aspx" target="_blank">Details</a> <br/>
                        &bull; Chicago's largest airport, located about 15 miles northwest of downtown.<br/>
                        &bull; A United hub. Delta, American and pretty much any other airline you can think of fly here.<br/>
                        &bull; 10000 W O'Hare Ave, Chicago, IL 60666</li> 
                        <li><DetailTitle>Midway International Airport (MDW)</DetailTitle> - <a href="http://www.flychicago.com/midway/home/pages/default.aspx" target="_blank">Details</a><br/>
                        &bull; Chicago's second largest airport is located about 15 miles southwest of downtown.<br/>  
                        &bull; Southwest's only airport in Chicago.<br/>
                        &bull; 5700 S Cicero Ave, Chicago, IL 60638</li>   
                    </ul>
                    <SmallTitle>By Train <i className="fa fa-train" aria-hidden="true"></i></SmallTitle>
                    <ul>
                    <li><DetailTitle>Amtrak to Union Station</DetailTitle> - <a href="http://www.chicagounionstation.com/index.html" target="_blank">Details</a> <br/>
                        &bull; Chicago's central station.<br/>
                        &bull; Take an <a href="https://www.amtrak.com/home" target="_blank">Amtrak</a> train from anywhere.<br/>
                        &bull; 210 S Canal St, Chicago, IL 60606</li> 
                        <li><DetailTitle>South Shore Line to Millenium Station</DetailTitle> - <a href="http://www.mysouthshoreline.com/" target="_blank">Details</a><br/>
                        &bull; Midwest train line that runs from South Bend, IN to Chicago.<br/>  
                        &bull; Cheaper, and great option if you are driving in and want to drop off your car and hop on at Michigan City.<br/>
                        &bull; 151 N Michigan Ave, Chicago, IL 60602</li>  
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Details;