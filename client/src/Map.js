import React from 'react';
require('dotenv').config()

const Map = (props) => {
    return(
        <iframe className="map" src="//www.google.com/maps/embed/v1/place?q=Galleria+Marchetti,Erie%20St,%20USA
        &zoom=13&key=AIzaSyAl5fG4_rjv0snqJKtkkoTmfhS2M_XNAdo" width={props.width} height={props.height}>
        </iframe>
    )
}

export default Map;