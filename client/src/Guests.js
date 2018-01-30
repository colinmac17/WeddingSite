import React, { Component } from 'react';
import { Title } from './Styles';
import firebase from 'firebase';
import * as dateformat from 'dateformat';

const database = firebase.database();

class Guests extends Component {
    constructor(){
        super()
        this.state = {
            aaGuests: []
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
                        console.log(snapshot.val())
                        this.setState({aaGuests: aaGuests.reverse()})
                    }
                }
            }
        });
    }

    renderDate = (timestring) => {
       
        let date = new Date(timestring)
        let day = date.getDate()
        let monthIndex = date.getMonth()
        let year = date.getFullYear()

        return dateformat(date, "mm/dd/yy h:MM:ss TT Z")
      }


    render(){
        return (
            <div className="container admin">
               <Title>Guests</Title>
               <div className="row guests">
                {this.state.aaGuests.map((guest, idx)=> {
                   return (
                    <div className="comment" key={guest.date}>
                        <h5>{guest.firstname} {guest.lastname} <span className="date"> Rsvped <span className="coming">{(guest.rsvp == 1) ? 'yes' : 'no'}</span> on {this.renderDate(guest.date)}</span></h5>
                        <p>Email: {guest.email}</p>
                        <p>FoodChoice: {guest.foodchoice}</p>
                        <hr/>
                    </div>
                   )
                })}
            </div>
            </div>
        )
    }
}

export default Guests;