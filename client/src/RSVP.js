import React from 'react';
import { Title } from './Styles';
import { Row, Input, Button } from 'react-materialize';

const RSVP = () => {
    return (
        <div className="container">
            <Title>RSVP (Coming Soon)</Title>
            <Row>
                <p>This page is under development</p>
                <Input placeholder="First Name" name="first_name" label="First Name" disabled />
                <Input placeholder="Last Name" name="last_name" label="Last Name" disabled/>
                <Input type='select' name="food_selection" label="Food Choice" disabled>
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                </Input>
                <p>Coming?</p>
                <Input name='rsvp' type='checkbox' value='1' label='Yes' disabled />
            </Row>
            <Row>
                <Button type="submit" disabled waves='light'>Submit RSVP</Button>
            </Row>
        </div>
    )
}

export default RSVP;