import React, { Component, Fragment } from 'react';
import { Title, RSVPMessage } from './Styles';
import { Row, Input, Button } from 'react-materialize';
import firebase from 'firebase';
import $ from 'jquery';
import Config from './Config';

  firebase.initializeApp(Config);

  const database = firebase.database();


class RSVP extends Component {
    constructor(props){
        super(props)
        this.state = {
            guests:[
                    {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                },
                {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                },
                {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                },
                {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                },
                {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                }
            ],
            guestCount: 1,
            message: 'Thank you for submitting your RSVP!',
            helpMessage: 'Please fill out all fields and make sure to select a valid food and rsvp option!',
            errMessage: 'You have either already RSVPED or there was an internal server error on our end, please contact me at colin.g.mcatee@gmail.com for assistance or to submit your RSVP!',
            showMessage: false,
            showErrMessage: false,
            showHelpMessage: false,
            aaGuests: [],
            showGuestMessage: false,
            guestMessage: 'You can add a max of 5 guests at a time. If you are RSVPing for more than 5 guests, please fill out the form again.'
        }
    }

    componentWillMount(){
        database.ref().on('value', (snapshot) => {
            if(snapshot.val() != null){
                let firstname, lastname, email, rsvp, foodchoice, aaGuestObjs, aaGuests, data, guests, date;
                aaGuests = [];
                data = snapshot.val()
                guests = data.guests
                if(snapshot.val().guests){
                    const oGuests = snapshot.val().guests;
                    if(Object.keys(oGuests).length > 0){
                        aaGuestObjs = Object.keys(oGuests);
                        aaGuestObjs.forEach((guest) => {
                            firstname = guests[guest].firstname;
                            lastname = guests[guest].lastname;
                            email = guests[guest].email;
                            rsvp = guests[guest].rsvp;
                            foodchoice = guests[guest].foodchoice
                            date = guests[guest].date
                            aaGuests.push({firstname: firstname, lastname: lastname, email: email, foodchoice: foodchoice, rsvp: rsvp, date: date})
                        });
                        this.setState({aaGuests: aaGuests.reverse()})
                    }
                }
            }
        });
    }

    onChange = (e) => {
        let i = e.target.dataset.guest
        const guest = this.state.guests[i]
        const field = e.target.name
        guest[field] = e.target.value;
        this.setState({
            guest: guest
        });
      }

      showAlert = () => {
          this.setState({showGuestMessage: true})
      }

      renderGuests = (e) => {
          let guestCount = this.state.guestCount
          switch(guestCount){
            case 1:
            return(
                <Row>
                    <Input data-guest="0" value={this.state.guests[0].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="0" value={this.state.guests[0].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="0" value={this.state.guests[0].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="0" value={this.state.guests[0].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="0" value={this.state.guests[0].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                </Row>
              )
              break;
              case 2:
              return(
                <Fragment>
                <Row>
                <h5 style={{marginLeft: '10px'}}>Guest 1:</h5>
                    <Input data-guest="0" value={this.state.guests[0].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="0" value={this.state.guests[0].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="0" value={this.state.guests[0].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="0" value={this.state.guests[0].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="0" value={this.state.guests[0].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                </Row>
                <Row>
                <h5 style={{marginLeft: '10px'}}>Guest 2:</h5>
                <Input data-guest="1" value={this.state.guests[1].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                    <Input data-guest="1" value={this.state.guests[1].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                    <Input data-guest="1" value={this.state.guests[1].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                    <Input data-guest="1" value={this.state.guests[1].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                        <option value='-1'selected>-----</option>
                        <option value='chicken'>Chicken</option>
                        <option value='beef'>Beef</option>
                        <option value='vegetarian'>Eggplant Parmesean (V)</option>
                    </Input>
                    <Input data-guest="1" value={this.state.guests[1].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                        <option value='-1'selected>-----</option>
                        <option value='1'>Yes</option>
                        <option value='0'>No</option>
                    </Input>
                </Row>
                </Fragment>
              )
              break;
              case 3:
              return(
                  <Fragment>
                     <Row>
                     <h5 style={{marginLeft: '10px'}}>Guest 1:</h5>
                    <Input data-guest="0" value={this.state.guests[0].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="0" value={this.state.guests[0].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="0" value={this.state.guests[0].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="0" value={this.state.guests[0].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="0" value={this.state.guests[0].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                </Row>
                <Row>
                <h5 style={{marginLeft: '10px'}}>Guest 2:</h5>
                <Input data-guest="1" value={this.state.guests[1].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                    <Input data-guest="1" value={this.state.guests[1].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                    <Input data-guest="1" value={this.state.guests[1].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                    <Input data-guest="1" value={this.state.guests[1].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                        <option value='-1'selected>-----</option>
                        <option value='chicken'>Chicken</option>
                        <option value='beef'>Beef</option>
                        <option value='vegetarian'>Eggplant Parmesean (V)</option>
                    </Input>
                    <Input data-guest="1" value={this.state.guests[1].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                        <option value='-1'selected>-----</option>
                        <option value='1'>Yes</option>
                        <option value='0'>No</option>
                    </Input>
                    </Row>
                        <Row>
                        <h5 style={{marginLeft: '10px'}}>Guest 3:</h5>
                    <Input data-guest="2" value={this.state.guests[2].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="2" value={this.state.guests[2].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="2" value={this.state.guests[2].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="2" value={this.state.guests[2].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="2" value={this.state.guests[2].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                        </Row>
                  </Fragment>
              )
              break;
              case 4:
              return(
                  <Fragment>
                        <Row>
                        <h5 style={{marginLeft: '10px'}}>Guest 1:</h5>
                    <Input data-guest="0" value={this.state.guests[0].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="0" value={this.state.guests[0].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="0" value={this.state.guests[0].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="0" value={this.state.guests[0].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="0" value={this.state.guests[0].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                </Row>
                <Row>
                <h5 style={{marginLeft: '10px'}}>Guest 2:</h5>
                <Input data-guest="1" value={this.state.guests[1].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                    <Input data-guest="1" value={this.state.guests[1].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                    <Input data-guest="1" value={this.state.guests[1].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                    <Input data-guest="1" value={this.state.guests[1].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                        <option value='-1'selected>-----</option>
                        <option value='chicken'>Chicken</option>
                        <option value='beef'>Beef</option>
                        <option value='vegetarian'>Eggplant Parmesean (V)</option>
                    </Input>
                    <Input data-guest="1" value={this.state.guests[1].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                        <option value='-1'selected>-----</option>
                        <option value='1'>Yes</option>
                        <option value='0'>No</option>
                    </Input>
                    </Row>
                        <Row>
                        <h5 style={{marginLeft: '10px'}}>Guest 3:</h5>
                    <Input data-guest="2" value={this.state.guests[2].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="2" value={this.state.guests[2].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="2" value={this.state.guests[2].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="2" value={this.state.guests[2].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="2" value={this.state.guests[2].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                        </Row>
                        <Row>
                        <h5 style={{marginLeft: '10px'}}>Guest 4:</h5>
                    <Input data-guest="3" value={this.state.guests[3].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="3" value={this.state.guests[3].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="3" value={this.state.guests[3].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="3" value={this.state.guests[3].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="3" value={this.state.guests[3].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                        </Row>
                  </Fragment>
              )
              break;
              case 5:
              return(
                  <Fragment>
                         <Row>
                         <h5 style={{marginLeft: '10px'}}>Guest 1:</h5>
                    <Input data-guest="0" value={this.state.guests[0].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="0" value={this.state.guests[0].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="0" value={this.state.guests[0].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="0" value={this.state.guests[0].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="0" value={this.state.guests[0].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                </Row>
                <Row>
                <h5 style={{marginLeft: '10px'}}>Guest 2:</h5>
                <Input data-guest="1" value={this.state.guests[1].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                    <Input data-guest="1" value={this.state.guests[1].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                    <Input data-guest="1" value={this.state.guests[1].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                    <Input data-guest="1" value={this.state.guests[1].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                        <option value='-1'selected>-----</option>
                        <option value='chicken'>Chicken</option>
                        <option value='beef'>Beef</option>
                        <option value='vegetarian'>Eggplant Parmesean (V)</option>
                    </Input>
                    <Input data-guest="1" value={this.state.guests[1].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                        <option value='-1'selected>-----</option>
                        <option value='1'>Yes</option>
                        <option value='0'>No</option>
                    </Input>
                    </Row>
                        <Row>
                        <h5 style={{marginLeft: '10px'}}>Guest 3:</h5>
                    <Input data-guest="2" value={this.state.guests[2].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="2" value={this.state.guests[2].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="2" value={this.state.guests[2].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="2" value={this.state.guests[2].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="2" value={this.state.guests[2].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                        </Row>
                        <Row>
                        <h5 style={{marginLeft: '10px'}}>Guest 4:</h5>
                    <Input data-guest="3" value={this.state.guests[3].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="3" value={this.state.guests[3].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="3" value={this.state.guests[3].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="3" value={this.state.guests[3].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="3" value={this.state.guests[3].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                        </Row>
                        <Row>
                        <h5 style={{marginLeft: '10px'}}>Guest 5:</h5>
                    <Input data-guest="4" value={this.state.guests[4].firstname} onChange={this.onChange} placeholder="First Name" name="firstname" label="First Name" />
                        <Input data-guest="4" value={this.state.guests[4].lastname} onChange={this.onChange} placeholder="Last Name" name="lastname" label="Last Name" />
                        <Input data-guest="4" value={this.state.guests[4].email} onChange={this.onChange} type="email" placeholder="Email" name="email" label="Email" />
                        <Input data-guest="4" value={this.state.guests[4].foodchoice} onChange={this.onChange} type='select' name="foodchoice" label="Food Choice" required>
                            <option value='-1'selected>-----</option>
                            <option value='chicken'>Chicken</option>
                            <option value='beef'>Beef</option>
                            <option value='vegetarian'>Eggplant Parmesean (V)</option>
                        </Input>
                        <Input data-guest="4" value={this.state.guests[4].rsvp} onChange={this.onChange} name='rsvp' type='select' label='Attending?' required>
                            <option value='-1'selected>-----</option>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </Input>
                        </Row>
                  </Fragment>
              )
              break;                  
          }
      }

      addGuest = (e) => {
        e.preventDefault();
        this.setState({guestCount: this.state.guestCount + 1})
      }

      removeGuest = (e) => {
          e.preventDefault();
          if(this.state.guestCount <= 1) return false;
          else this.setState({guestCount: this.state.guestCount - 1})
      }

      submitToFirebase(firstname ,lastname, foodchoice, rsvp, email) {
          let firebase = require('firebase');
                database.ref(`/guests/`).push({
                    firstname: firstname.toLowerCase(),
                    lastname: lastname.toLowerCase(),
                    email: email.toLowerCase(),
                    foodchoice: foodchoice,
                    rsvp: rsvp,
                    date: firebase.database.ServerValue.TIMESTAMP
                },((err) => {
                    if(err){
                        console.log(err);
                        this.setState({showErrMessage: true })
                    }
                    if(!err){
                        this.setState({ showMessage: true})
                    }
                }));
      }

      handleButtonClick = (e) => {
        e.preventDefault();
        const { guests } = this.state
        guests.forEach((oGuest, index) => {
            if(index < this.state.guestCount){
                const { firstname, lastname, foodchoice, rsvp, email } = oGuest;
                if(firstname.length > 0 && lastname.length > 0 && email.length > 0 && $('select[name="rsvp"]').val() != -1){
                    this.submitToFirebase(firstname, lastname, foodchoice, rsvp, email);
                } else {
                    this.setState({showHelpMessage: true}) 
                }
            }
        })
        this.resetForm();
      }

      resetForm(){
        document.getElementById('rsvpForm').reset();
        this.setState({
            guests:[
                    {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                },
                {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                },
                {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                },
                {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                },
                {
                    firstname: '',
                    lastname: '',
                    foodchoice: '',
                    email: '',
                    rsvp: false
                }
            ],
            guestCount: 1
        })
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
            {this.state.showGuestMessage ? 
            <RSVPMessage className="message" background="#dff0d8" color="#3c763d">
                <p>{this.state.guestMessage}</p>
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
            <span stype={{marginBottom: '10px'}}>
            <Button disabled={this.state.guestCount >= 5 ? true : false} style={{background: '#026782'}} id="addBtn" onClick={this.addGuest} waves="light"><i className="material-icons">add_circle</i></Button>
            <Button style={{background: 'red', padding: '-10px', marginLeft: '10px'}} id="removeBtn" onClick={this.removeGuest} waves="light"><i className="material-icons">highlight_off</i></Button>
            <p>Click to add or remove up to 5 guests</p>
            </span>
            <form id="rsvpForm" ref="form" onSubmit={this.handleButtonClick}>
                {this.renderGuests()}
                <Row>
                    <Button type="submit" waves='light'>Submit RSVP</Button>
                </Row>
            </form>
        </div>
    )
  }
}

export default RSVP;