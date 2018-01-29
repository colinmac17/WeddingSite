import React, { Component } from 'react';
import { Title, RSVPMessage } from './Styles';
import { Row, Input, Button } from 'react-materialize';
import firebase from 'firebase';
import $ from 'jquery';
import Config from './Config';


const database = firebase.database();

class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
            aaData: {},
            guest: {
                name: '',
                message: ''
            },
            message: 'Thank you for submitting your message!',
            helpMessage: 'Please fill out all fields!',
            errMessage: 'Woops there was an error!',
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
                let name, comment, aaCommentObjs;
                let aaComments = [];
                let data = snapshot.val()
                let comments = data.comments
                console.log(snapshot.val());
                const oComments = snapshot.val().comments;
                aaCommentObjs = Object.keys(oComments);
                aaCommentObjs.forEach((comment) => {
                    name = comments[comment].name;
                    comment = comments[comment]['message'];
                    aaComments.push({name: name, comment: comment})
                });
                console.log(snapshot.val())
                this.setState({aaData: aaComments})
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

      submitToFirebase(name, message) {
                database.ref(`/comments`).push({
                    name: name.toLowerCase(),
                    message: message
                },((err) => {
                    if(err){
                        console.log(err);
                        this.setState({showErrMessage: true })
                    }
                    if(!err){
                        this.setState({ showMessage: true, guest:{name: '', email: ''}})
                    }
                }));
      }

      handleButtonClick = (e) => {
          this.resetForm();
        const { name, message } = this.state.guest;
        e.preventDefault();

        if(name.length > 0 && message.length > 0){
            this.submitToFirebase(name, message);
         } else {
            this.setState({showHelpMessage: true}) 
         }
      }

      resetForm(){
          $('input[name="name"]').val('');
          $('input[name="message"]').val('');
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

            <Title>Leave a message</Title>
            <form id="rsvpForm" ref="form" onSubmit={this.handleButtonClick}>
                <Row>
                    <Input value={this.state.guest.firstname} onChange={this.onChange} placeholder="Name" name="name" label="Name" />
                    <textarea value={this.state.guest.message} onChange={this.onChange} type="text" placeholder="your message" name="message"></textarea>
                </Row>
                <Row>
                    <Button type="submit" waves='light'>Submit Message</Button>
                </Row>
            </form>
        </div>
    )
  }
}

export default Comments;