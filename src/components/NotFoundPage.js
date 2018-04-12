import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => (
    <div>
        404 Error -- Page not found
        <div>
            <Link to="/">Go Home</Link>
        </div>
    </div>
);

export default NotFoundPage;