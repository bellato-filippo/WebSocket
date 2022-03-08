const express = require('express');
const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, { cors: { origin: "*"}});

io.on('connection', (socket) => {
    socket.on('humidity', (msg) => {
        io.emit('humidity', msg);
    });

    socket.on('temperature', (msg) => {
        io.emit('temperature', msg);
    });
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/station', (req, res) => {
    res.render('station.ejs');
});

app.get('/capteur', (req, res) => {
    res.render('capteur.ejs');
});

server.listen(3000, () => {
    console.log('Listening on port 3000');
});