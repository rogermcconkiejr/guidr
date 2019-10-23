const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('./users/users-router');
const tripsRouter = require('./trips/trips-router');
const profilesRouter = require('./profiles/profiles-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/users', usersRouter);
server.use('/trips',  tripsRouter);
server.use('/profiles', profilesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Server Running' });
});

module.exports = server;