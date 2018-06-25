// Imports
const express = require('express');
const path = require('path');
const app = express();

// Set the http protocol
const server = require('http').createServer(app);

// Set the wss protocol - web socket
const io = require('socket.io')(server);

// Set the public folder of access the application
app.use(express.static(path.join(__dirname,'../')));

// Setting views like html and not EJS as default on Node.js
app.set('views',path.join(__dirname,'../'));

// Set engine
app.engine('html', require('ejs').renderFile);

// Set view format witch it will rendering
app.set('view engine','html');

// Set port
server.listen(3000,function(){
    console.log('Server is running on 3000 port...');
});
