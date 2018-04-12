//hoc=higher order components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info; please don't share1</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
            <div>
                <p>User is authenticated</p>
                <WrappedComponent {...props} />
            </div>) 
            : <p>Please login</p>  }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='my info'></AdminInfo>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='my info'></AuthInfo>, document.getElementById('app'));
