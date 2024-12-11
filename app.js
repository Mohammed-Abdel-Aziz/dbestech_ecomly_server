//import express module
const express = require('express');

//creating object from express() to use it in the project
// Creates an Express application
const app = express();

//the app.listen function is used to start the server and make it listen for incoming requests on a specified port.
//app.listen(port, hostname, callbackFunction)
//The server listens on port 3000.
//hostname is domainName or IP, like 'google.com', or 'localhost', by default it connect to localhost
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});