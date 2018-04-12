console.log('app.js is running');

let app = {
    title:"Indecision Application",
    subTitle:"stuff",
    options: ['one', 'two']
}

// JSX Javascript XML
let template = (<div>
    {app.title && <h1>{app.title}</h1>}
    <p>{app.subTitle}</p>
    {app.options.length > 0 ? <p>Here are your options</p> : <p>Options don't exisit</p>}
    <ol>
        <li>one</li>
        <li>two</li>
    </ol>
</div>);

let user = {
    age: 15,
    name: 'Dan',
    location:"Over there"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
    else {
        return undefined;
    }
}

let templateTwo = (<div>
    <h1>{user.name ? user.name : 'No user name'}</h1>
    {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
    {/*<p>Location: {getLocation(user.location)}</p>*/}
    {getLocation(user.location)}
</div>);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);