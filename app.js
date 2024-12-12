//import express module
const express = require('express');

//import dotenv lib, the importing for this lib in this way.
require('dotenv/config');

//creating object from express() to use it in the project
//creates an Express application
const app = express();

//the app.get function is used to define a route for the HTTP GET request.
//app.get(path, callbackFunction)
//the path is a string that specifies the route, and the callbackFunction is a function that is called when the route is accessed.
//the callbackFunction is a function that is called when the route is accessed
//the callbackFunction  req (short for request): Represents the incoming request object. res (short for response): Represents the outgoing response object.
app.get('/', (req, res) => {
    returnres.send('Hello World!');
});
app.get('/users/:id', (req, res) => {
    return res.json({
        id: req.params.id
    });
});

//the app.listen function is used to start the server and make it listen for incoming requests on a specified port.
//app.listen(port, hostname, callbackFunction)
//The server listens on port 3000.
//hostname is domainName or IP, like 'google.com', or 'localhost', by default it connect to localhost
//process.env to read data from the env file
const env = process.env;
const port = env.PORT;
const hostName = env.HOSTNAME;

app.listen(port, hostName, () => {
    console.log(`Server is running on http://${hostName}:${port}`);
});