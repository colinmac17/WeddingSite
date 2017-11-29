import React from 'react';
import { Title, SmallTitle } from './Styles';
import { Row, Col } from 'react-materialize';
import Map from './Map';

const details = ['Location: Chicago, IL', 'Venue: Galleria Marchetti', 'Date: Saturday June 16, 2018', 'Time: 6PM - 11PM CST', 'Food: Italian' , 'Beverage: Open Bar', 'Dancing to follow'];

const detailList = details.map((detail, idx) => {
    const detailArray = detail.split(':');
    const detailTitle = detailArray[0];
    const detailDesc = detailArray[1];
    return <li className="details" key={idx}><b className="bold">{detailTitle}</b>{detailDesc}</li>;
});

const Details = () => {
    return (
        <div className="container details" id="details">
            <Title>Details</Title>
            <Row>
                <Col s={12} m={6}>
                    <Map width="400" height="400"/>
                </Col>
                <Col s={12} m={6}>
                    <ul>
                    {detailList}
                    </ul>
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