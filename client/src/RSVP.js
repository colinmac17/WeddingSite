import React, { Component } from 'react';
import { Title, RSVPMessage } from './Styles';
import { Row, Input, Button } from 'react-materialize';
import firebase from 'firebase';
import $ from 'jquery';

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
            helpMessage: 'Please fill out all fields!',
            errMessage: 'You have either already RSVPED or there was an internal server error on our end, please contact me at colin.g.mcatee@gmail.com for assistance or to submit your RSVP!',
            showMessage: false,
            showErrMessage: false,
            showHelpMessage: false,
            aaGuestNames: []
        }
    }

    componentDidMount(){
        let aaGuestNames;
        database.ref().on('value', (snapshot) => {
            if(snapshot.val() != null){
                const oGuests = snapshot.val().guests;
                aaGuestNames = Object.keys(oGuests);
                this.setState({aaGuestNames: aaGuestNames})
            }
        });
    }

    validateForm(firstname, lastname) {
        this.state.aaGuestNames.forEach((name) => {
            if(`${firstname.toLowerCase()} ${lastname.toLowerCase()}` == name){
                return false
            }
        });
    }

    onChange = (e) => {
        const guest = this.state.guest
        const field = e.target.name
        guest[field] = e.target.value;
        this.setState({
            guest: guest
        });
      }

      submitToFirebase(firstname ,lastname, foodchoice, rsvp, email) {
                database.ref(`/guests/${firstname.toLowerCase()} ${lastname.toLowerCase()}`).push({
                    firstname: firstname.toLowerCase(),
                    lastname: lastname.toLowerCase(),
                    email: email.toLowerCase(),
                    foodchoice: foodchoice,
                    rsvp: rsvp
                },((err) => {
                    if(err){
                        console.log(err);
                        this.setState({showErrMessage: true })
                    }
                    if(!err){
                        this.setState({ showMessage: true, guest:{firstname: '', lastname: '', email: '', rsvp: false, foodchoice: '' }})
                    }
                }));
      }

      handleButtonClick = (e) => {
          this.resetForm();
        const { firstname, lastname, foodchoice, rsvp, email } = this.state.guest;
        e.preventDefault();

        let fullName = firstname.toLowerCase() + ' ' + lastname.toLowerCase()
        let inValidNames = []
        this.state.aaGuestNames.forEach(name => {
            if(name == fullName) inValidNames.push(name);
        });
        
        if(inValidNames.length > 0) this.setState({showErrMessage: true})
        else {
        if(firstname.length > 0 && lastname.length > 0 && email.length > 0){
            this.submitToFirebase(firstname, lastname, foodchoice, rsvp, email);
         } else {
            this.setState({showHelpMessage: true}) 
         }
        }
      }

      resetForm(){
          $('input[name="firstname"]').val('');
          $('input[name="lastname"]').val('');
          $('input[name="email"]').val('');
          $('input[name="rsvp"] option[value="-1"]').prop('selected', true);
          $('input[name="foodchoice"] option[value="-1"]').prop('selected', true);
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
            <form id="rsvpForm" ref="form" onSubmit={this.handleButtonClick}>
                <Row>
                    <Input value={this.state.firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                    <Input value={this.state.lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                    <Input value={this.state.email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                    <Input value={this.state.foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                        <option value='-1' disabled selected>Select Meal</option>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </Input>
                    <Input value={this.state.rsvp} onChange={this.onChange} name='rsvp' type='select' label='Coming?' required>
                        <option value='-1' disabled selected>Select RSVP</option>
                        <option value='1'>Yes</option>
                        <option value='0'>No</option>
                    </Input>
                </Row>
                <Row>
                    <Button type="submit" waves='light'>Submit RSVP</Button>
                </Row>
            </form>
        </div>
    )
  }
}

export default RSVP;