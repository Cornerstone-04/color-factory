import React from 'react';
import { Link } from 'react-router-dom'


const red = () => {
    return (
        <div className="red">
            <div >
                <h1>This is Color red with HEX #FF0000</h1>
                <p>
                <Link to="/"><h1>Go back</h1></Link>
                </p>
            </div>
        </div>
    );
}

export default red;
