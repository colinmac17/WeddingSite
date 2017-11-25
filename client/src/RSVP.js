import React, { Component } from 'react';
import { Title } from './Styles';
import firebase from 'firebase';
import { Row, Input, Button } from 'react-materialize';

class RSVP extends Component {
    // componentDidMount() {
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyAFwrDcEA_E5t7R9THRM_ohRx09TRXhsY4",
    //         authDomain: "weddingsite-55ce1.firebaseapp.com",
    //         databaseURL: "https://weddingsite-55ce1.firebaseio.com",
    //         projectId: "weddingsite-55ce1",
    //         storageBucket: "weddingsite-55ce1.appspot.com",
    //         messagingSenderId: "461103669692"
    //     });
    //   }
    render() {
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
}

export default RSVP;