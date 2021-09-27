const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const student_sum = [
  {
    id: 1,
    name: 'John Deo',
    class: 'Four',
    social: 75,
    science: 84,
    math: 78,
  },
  {
    id: 2,
    name: 'Max Ruin',
    class: 'Three',
    social: 54,
    science: 67,
    math: 85,
  },
  {
    id: 3,
    name: 'Arnold',
    class: 'Three',
    social: 78,
    science: 65,
    math: 90,
  },
  {
    id: 4,
    name: 'Krish Star',
    class: 'Four',
    social: 50,
    science: 51,
    math: 53,
  },
  {
    id: 5,
    name: 'John Mike',
    class: 'Four',
    social: 80,
    science: 78,
    math: 89,
  },
  {
    id: 6,
    name: 'Alex John',
    class: 'Four',
    social: 78,
    science: 60,
    math: 60,
  },
  {
    id: 7,
    name: 'My John Rob',
    class: 'Five',
    social: 77,
    science: 68,
    math: 83,
  },
  {
    id: 8,
    name: 'Asruid',
    class: 'Five',
    social: 55,
    science: 50,
    math: 55,
  },
  {
    id: 9,
    name: 'Tes Qry',
    class: 'Six',
    social: 68,
    science: 60,
    math: 62,
  },
  {
    id: 10,
    name: 'Big John',
    class: 'Four',
    social: 65,
    science: 66,
    math: 76,
  },
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
