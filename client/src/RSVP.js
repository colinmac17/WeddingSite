import React, { Component } from 'react';
import { Title, RSVPMessage } from './Styles';
import { Row, Input, Button } from 'react-materialize';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAO0VQFLcNWiGgH7fLz49qN6GpwCOfF6qk",
    authDomain: "colin-and-kelsey.firebaseapp.com",
    databaseURL: "https://colin-and-kelsey.firebaseio.com",
    projectId: "colin-and-kelsey",
    storageBucket: "colin-and-kelsey.appspot.com",
    messagingSenderId: "1077558573636"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

class RSVP extends Component {
    constructor(props){
        super(props)
        this.state = {
            guest: {
                firstname: '',
                lastname: '',
                foodchoice: '',
                email: '',
                rsvp: false
            },
            message: 'Thank you for submitting your rsvp!',
            helpMessage: 'Please fill our all fields!',
            errMessage: 'There was an error on our server, please contact me at colin.g.mcatee@gmail.com for assistance or to submit your RSVP!',
            showMessage: false,
            showErrMessage: false,
            showHelpMessage: false
        }
    }

    onChange = (e) => {
        const guest = this.state.guest
        const field = e.target.name
        guest[field] = e.target.value;
        this.setState({
            guest: guest
        });
      }

      handleButtonClick = (e) => {
        const { firstname, lastname, foodchoice, rsvp, email } = this.state.guest;
        e.preventDefault();
        if(firstname.length > 0 && lastname.length > 0 && email.length > 0){
            database.ref(`/guests/${firstname} ${lastname}`).push({
                firstname: firstname,
                lastname: lastname,
                email: email,
                foodchoice: foodchoice,
                rsvp: rsvp
            },((err) => {
                if(err){
                    console.log(err);
                    this.setState({showErrMessage: true })
                    this.resetForm()
                }
                if(!err){
                    this.setState({ showMessage: true })
                    this.resetForm()
                }
            }));
         } else {
            this.setState({showHelpMessage: true}) 
            this.resetForm();
         }
      }

      resetForm = () => { 
        document.getElementById("rsvpForm").reset();
      }

      closeMe = (e) => {
          e.preventDefault();
          this.setState({showMessage: false, showHelpMessage: false, showErrMessage: false})
      }

    render() {
    return (
        <div className="container" id="rsvp">

            {this.state.showMessage ? 
            <RSVPMessage className="message" background="#dff0d8" color="#3c763d">
                <p>{this.state.message}</p>
                <button aria-hidden="true" className="close" onClick={this.closeMe}>close</button>
            </RSVPMessage> : ''}
            {this.state.showErrMessage ? 
                <RSVPMessage className="message" background="#f8d7da" color="#721c24">
                    <p>{this.state.errMessage}</p>
                    <button aria-hidden="true" className="close" onClick={this.closeMe}>close</button>
                </RSVPMessage> : ''}
                {this.state.showHelpMessage ? 
                    <RSVPMessage className="message" background="#fff3cd" color="#856404">
                        <p>{this.state.helpMessage}</p>
                        <button aria-hidden="true" className="close" onClick={this.closeMe}>close</button>
                    </RSVPMessage> : ''}

            <Title>RSVP Online</Title>
            <Row>
                <form id="rsvpForm">
                    <Input onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" required/>
                    <Input onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" required/>
                    <Input onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" required/>
                    <Input onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                        <option value='-1' disabled selected>Select Meal</option>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </Input>
                    <Input onChange={this.onChange} name='rsvp' type='select' label='Coming?' required>
                        <option value='-1' disabled selected>Select RSVP</option>
                        <option value='1'>Yes</option>
                        <option value='0'>No</option>
                    </Input>
                </form>
            </Row>
            <Row>
                <Button onClick={this.handleButtonClick} type="submit" waves='light'>Submit RSVP</Button>
            </Row>
        </div>
    )
  }
}

export default RSVP;