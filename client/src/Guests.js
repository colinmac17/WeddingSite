import React, { Component } from 'react';
import { Title } from './Styles';
import base from './base';

class Guests extends Component {
    constructor(){
        super()
        this.state = {
            guests: {}
        }
    }   

    componentWillMount(){
        base.syncState(`/guests`, {
            context: this,
            state: ''
          });
    }


    render(){
        return (
            <div className="container admin">
               <Title>Guests</Title>
            </div>
        )
    }
}

export default Guests;