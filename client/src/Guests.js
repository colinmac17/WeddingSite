import React, { Component } from 'react';
import { Title } from './Styles';
import base from './base';

class Guests extends Component {
    constructor(){
        super()
        this.state = {
            guests: {'1': 'colin'}
        }
    }
    componentWillMount(){
        this.ref = base.syncState(`guests`, {
            context: this,
            state: 'guests'
          });
    }

    componentDidMount(){
        base.bindToState('guests', {
            context: this,
            state: 'guests'
          });
    }
    
    componentWillUnmount(){
        base.removeBinding(this.ref);
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