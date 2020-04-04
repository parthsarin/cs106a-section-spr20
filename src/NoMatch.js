import React from 'react';

import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div className="notfound text-center">
            <div className="notfound-404">
                <h1>Oops!</h1>
            </div>
            <h2>We couldn't find that page...</h2>
            <p className="lead">
                The page you are looking for might have been removed, had its 
                name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-outline-success">
                Return to the Homepage
            </Link>
        </div>
    );
}

export default NoMatch;