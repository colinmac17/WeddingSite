import React from 'react';
import { Title, SmallTitle } from './Styles';
import { Row, Col } from 'react-materialize';
import Map from './Map';

const details = ['Location: Chicago, IL', 'Venue: Galleria Marchetti', 'Date: Saturday June 16, 2018', 'Time: 6PM - 11PM CST', 'Food: Italian' , 'Beverage: Open Bar', 'Dancing to follow'];

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
                    <p>Below are some of our favorite restaurants and things to do in the city. We have also highlighted the venue and hotel accomodations for your convenience</p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={12}>
                    <Map width={1000} height={600}/>
                </Col>
            </Row>
            <Row>
                <SmallTitle>Accomadations (Coming Soon)</SmallTitle>
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
            <Row>
            <SmallTitle>Things to Do (Coming Soon)</SmallTitle>
                <Col s={12} m={6}>
                </Col>
                <Col s={12} m={6}>
                </Col>
            </Row>
        </div>
    )
}

export default Details;