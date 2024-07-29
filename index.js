const express = require('express');
const http = require('http');
const path = require('path');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve('./public')));

const io = new Server(server);


//  WEBSOCKET
io.on("connection", (socket)=>{
    socket.on("User Message: ", (message)=>{
        io.emit("message", message);
    });
});


// HTTP 
app.get('/',(req, res)=>{
    res.sendFile('./public/index.html');
});


server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});