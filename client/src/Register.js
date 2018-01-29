import React from 'react';
import { Title } from './Styles';
import { Row, Col } from 'react-materialize';

const Register = () => {
    return (
        <div className="container register text-center" id="registry">
            <Title className="text-center">Registry</Title>
            <Row className="register-links">
                <p>We are registered at <a href="https://www.honeyfund.com/wedding/kelseyandcolin" target="_blank">Honey Fund</a> and <a href="https://www.crateandbarrel.com/gift-registry/kelsey-kippe-and-colin-mcatee/r5777098" target="_blank">Crate & Barrel</a>.</p>
            </Row>
        </div>
    )
}

export default Register;