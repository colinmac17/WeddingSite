import React from 'react';
import Slider from './Slider';
import { Title } from './Styles';

const Photos = () => {
    return (
        <div className="container photos" id="photos">
            <Title>Photos</Title>
            <p>If you would like to see more of our engagement photos by the talented <a href="http://shellyandersonphotography.com/" targe="_blank">Shelly Anderson</a>, please click this <a href="http://www.shellyandersonphotographyblog.com/2018/01/24/kelsey-and-colins-engagement-in-la-jolla/" target="_blank">link.</a></p>
            <Slider/>
        </div>
    )
}

export default Photos;