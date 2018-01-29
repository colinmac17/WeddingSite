import React from 'react';
import { Countdown }  from './Styles';

const countdown = () => {
    let oneDay = 24*60*60*1000;
    let d = new Date();
    let endDate = new Date('06/16/2018');
    return Math.round(Math.abs((d.getTime() - endDate.getTime())/(oneDay)));
}

const RemainingDays = () => {
    return (
        <Countdown color="#3e3e3e" className="center-align">{countdown()} Days Remaining!</Countdown>
    )
}

export default RemainingDays;