const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const users = require('./data/fakeUsers');

// Static files
app.use(express.static('public'));

// Home menu
const menu =
 `<nav>
        <a href="/">Home</a>
        &nbsp;|&nbsp;
        <a href="/list">List</a>
    </nav>`;

// Bootstrap middleware
function template(title, html) {
    return `<html>
        <head>
            <link href="/style.css" rel="stylesheet">
        </head>
        <body class="container">
            <div>${menu}</div>
            <h1>${title}</h1>
            <div>
                ${html}
            </div> 
        </body>
    </html>`;
}

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => {
    const content =
        `<form action="/login" method="POST">
            <label for="username">Name: </label>
            <input type="text" name="username" />
            <br>

            <label for="password">Password: </label>
            <input type="password" name="password" />
            <br>

            <button type="submit">GO!</button>
        </form>`

    res.send(template('Login', content))
})

app.post('/login', (req, res) => {
    // Check if the user is authenticated
    if (req.body.username === 'aneesah' && req.body.password === 'web322') {
        req.session.authenticated = true;
        res.redirect('/list');
    } else {
        res.send('Invalid credentials. Please try again.');
    }
})

// Authentication middleware for accessing the list
app.use('/list', (req, res, next) => {
    // Check if the user is authenticated
    if (req.session.authenticated) {
        next();
    } else {
        res.send('You need to log in first.');
    }
});

app.get('/list', (req, res) => {
    const userList = users.slice(0, 25).map(user =>
        `<tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td><a href="/detail/${user.id}">View Details</a></td>
        </tr>`
    ).join('');

    const content = `
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            ${userList}
        </tbody>
    </table>`;

    res.send(template('List', content));
})

app.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);

    const content = `<div>${id} ${user.firstName} ${user.lastName}</div>`;
    res.send(template('Detail', content));
})

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`)
);
