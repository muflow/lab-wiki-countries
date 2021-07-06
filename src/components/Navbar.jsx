import React from 'react';

import { Link } from 'react-router-dom';

function Navbar (props) {
    return (
        <h1><Link to='/'>{props.name} </Link> </h1>
    )
}

export default Navbar