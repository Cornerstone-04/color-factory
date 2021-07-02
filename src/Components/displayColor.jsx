import React from 'react';
import { Link } from 'react-router-dom'

const DisplayColor = ({match:{params: {colorName, colorCode} }}) => {
// 

    return (
        <div className="container" style={{backgroundColor:'#' + colorCode}}>
            <div>
                <h1>This is Color {colorName} with HEX colorCode</h1>
                <p>
                <Link to="/"><h1>Go back</h1></Link>
                </p>
            </div>
        </div>
    );
}


export default DisplayColor;
