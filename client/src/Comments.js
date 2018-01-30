import React, { Component } from 'react';
import { Title, RSVPMessage } from './Styles';
import { Row, Input, Button } from 'react-materialize';
import firebase from 'firebase';
import $ from 'jquery';
import * as dateformat from 'dateformat';


const database = firebase.database();

class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
            aaComments: [],
            guest: {
                name: '',
                message: '',
                timestamp: ''
            },
            message: 'Thank you for submitting your message!',
            helpMessage: 'Please fill out all fields!',
            errMessage: 'Woops there was an error!',
            showMessage: false,
            showErrMessage: false,
            showHelpMessage: false
        }
    }

    componentDidMount(){
        let aaGuestNames;
        database.ref().on('value', (snapshot) => {
            if(snapshot.val() != null){
                let name, date, comment, aaCommentObjs, aaComments, data, comments;
                aaComments = [];
                data = snapshot.val()
                comments = data.comments
                if(snapshot.val().comments){
                    const oComments = snapshot.val().comments;
                    if(Object.keys(oComments).length > 0){
                        aaCommentObjs = Object.keys(oComments);
                        aaCommentObjs.forEach((comment) => {
                            console.log(comments[comment].date)
                            date = comments[comment].date;
                            name = comments[comment].name;
                            comment = comments[comment].message;
                            aaComments.push({name: name, comment: comment, date: date})
                        });
                        console.log(snapshot.val())
                        this.setState({aaComments: aaComments.reverse()})
                    }
                }
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

      submitToFirebase(name, message ) {
        let firebase = require('firebase')
        database.ref(`/comments`).push({
            name: name.toLowerCase(),
            message: message,
            date: firebase.database.ServerValue.TIMESTAMP
        },((err) => {
            if(err){
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
            this.submitToFirebase(name, message );
         } else {
            this.setState({showHelpMessage: true}) 
         }
      }

      resetForm(){
          $('input[name="name"]').val('');
          $('#message').val('');
      }

      closeMe = (e) => {
          e.preventDefault();
          this.setState({showMessage: false, showHelpMessage: false, showErrMessage: false})
      }

      renderDate = (timestring) => {
       
        let date = new Date(timestring)
        
        let day = date.getDate()
        let monthIndex = date.getMonth()
        let year = date.getFullYear()

        return dateformat(date, "mm/dd/yy h:MM:ss TT Z")
      }

    render() {
    return (
        <div className="container" id="comments">

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
            <div className="comment-form">        
                <Title>Leave us a message</Title>
                <form id="rsvpForm" ref="form" onSubmit={this.handleButtonClick}>
                    <Row>
                        <Input value={this.state.guest.firstname} onChange={this.onChange} placeholder="Name" name="name" label="Name" />
                        <textarea id="message" value={this.state.guest.message} onChange={this.onChange} type="text" placeholder="your message" name="message"></textarea>
                    </Row>
                    <Row>
                        <Button type="submit" waves='light'>Submit Message</Button>
                    </Row>
                </form>
            </div>
            <div className="row comments">
                <h3>Comments</h3>
                {this.state.aaComments.map((comment, idx)=> {
                   return (
                    <div className="comment" key={comment.date}>
                        <h5>{comment.name} <span className="date"> on {this.renderDate(comment.date)}</span></h5>
                        <p>{comment.comment}</p>
                        <hr/>
                    </div>
                   )
                })}
            </div>
        </div>
    )
  }
}

export default Comments;