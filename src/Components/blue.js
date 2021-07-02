import React from 'react';
import { Link } from 'react-router-dom'

const blue = () => {
    return (
        <div>
            <div className="blue">
                <h1>This is Color blue with HEX #0000FF</h1>
                <p>
                <Link to="/"><h1>Go back</h1></Link>
                </p>
            </div>
        </div>
    );
}

export default blue;
