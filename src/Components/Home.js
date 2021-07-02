import React from 'react';
import { Link } from "react-router-dom"

function Home() {
    
    return (
        <div className="colorfactory">
            <div className="header">
                <h2>
                    Welcome to the color Factory
                </h2>
                <h1>
                <Link to="/Add">Add a Color</Link>
                </h1>
            </div>

            <div className="select">
                <h2>
                    Please Select a Color
                </h2>
                <div>
                    <p><Link to="/red">red</Link></p>
                </div>
                <div>
                    <p><Link to="/green">green</Link></p>
                </div>
                <div>
                    <p><Link to="/blue">blue</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Home;