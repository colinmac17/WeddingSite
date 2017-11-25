import React from 'react';
import Slider from './Slider';
import { Title } from './Styles';

const Photos = () => {
    return (
        <div className="container photos">
            <Title>Photos</Title>
            <Slider/>
        </div>
    )
}

export default Photos;