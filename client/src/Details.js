import React from 'react';
import { Title, SmallTitle } from './Styles';
import { Row, Col } from 'react-materialize';

const details = ['Location: Chicago, IL', 'Venue: Galleria Marchetti', 'Date: Saturday June 16, 2018', 'Time: 6PM - 11PM CST', 'Food: Italian' , 'Beverage: Open Bar', 'Dancing to follow'];

const detailList = details.map((detail, idx) => {
    return <li key={idx}>{detail}</li>;
});

const Details = () => {
    return (
        <div className="container details">
            <Title>Details</Title>
            <Row>
                <Col s={12} m={6}>
                    <img className="responsive-img" src="http://res.cloudinary.com/soccerresume/image/upload/v1511557323/pergola_w9qf8o.jpg"/>
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