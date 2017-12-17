import React from 'react';
import { Title, SmallTitle, HotelTitle } from './Styles';
import { Row, Col } from 'react-materialize';
import Map from './Map';

const details = ['Location: Chicago, IL', 'Venue: Galleria Marchetti', 'Date: Saturday June 16, 2018', 'Time: 430 - 11PM CST', 'Food: Italian' , 'Beverage: Open Bar', 'Dancing to follow'];

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
                <SmallTitle>Accomadations</SmallTitle>
                <Col s={12}>
                    <ul>
                        <li><HotelTitle>Courtyard Marriott River North/Downtown</HotelTitle> - <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Kelsey%20Kippe%20Colin%20McAtee%20Wedding%20Block%20%5Echiwb%60KMCKMCB%60219%60USD%60false%604%606/15/18%606/17/18%6005/25/18&app=resvlink&stop_mobi=yes" target="_blank">Book</a> <br/>
                        &bull; Reservations can also be made by calling our Marriott Reservation Center toll free at <a href="tel:18003212211">1-800-321-2211</a>.</li>
                        <li><HotelTitle>Marriott River North</HotelTitle> - <a href="https://aws.passkey.com/event/49553968/owner/1361/home" target="_blank">Book</a><br/>
                        &bull; Reservations can also be made by calling our Marriott Reservation Center toll free at <a href="tel:18773030104">1-877-303-0104</a>.</li>   
                    </ul>
                </Col>
            </Row>
            <Row>
            <SmallTitle>Places to Eat (Coming Soon)</SmallTitle>
                <Col s={12} m={6}>
                </Col>
                <Col s={12} m={6}>
                </Col>
            </Row>
            <Row>
            <SmallTitle>Things to Do (Coming Soon)</SmallTitle>
                <Col s={12} m={6}>
                </Col>
                <Col s={12} m={6}>
                </Col>
            </Row>
            <Row>
                <SmallTitle>Travel and Transportation (Coming Soon)</SmallTitle>
                <Col s={12} m={6}>
                </Col>
                <Col s={12} m={6}>
                </Col>
            </Row>
        </div>
    )
}

export default Details;