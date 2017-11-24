import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container center-align">
            <h1 className="center-align">Sorry, We Could Not Find This Page!</h1>
            <Link to="/" className="btn waves-effect waves-light">Take Me Home</Link>
        </div>
    )
}

export default NotFound;