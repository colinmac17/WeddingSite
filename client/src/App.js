import React, { Component } from 'react';
import { Title, HR, DateOfWedding, Venue } from './Styles';
import Slider from './Slider';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <DateOfWedding color="#3e3e3e">06/16/2018 @ Galleria Marchetti</DateOfWedding>
        <Slider />
      </div>
    );
  }
}

export default App;
