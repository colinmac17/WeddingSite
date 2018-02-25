import React from 'react';

const Map = (props) => {
    return(
        <iframe className="map" src="https://www.google.com/maps/d/u/1/embed?mid=1mkmEiIv7fj8DgndE98Ewy5wGmu0z0MTq" width={props.width} height={props.height}></iframe>
    )
}

export default Map;