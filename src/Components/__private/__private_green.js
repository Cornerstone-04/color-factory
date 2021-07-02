import React from 'react';
import { Link } from 'react-router-dom'

const green = () => {
    return (
        <div>
            <div className="green">
                <h1>This is Color green with HEX #008000</h1>
                <p>
                <Link to="/"><h1>Go back</h1></Link>
                </p>
            </div>
        </div>
    );
}

export default green;
