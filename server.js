'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const server = express();
const PORT = process.env.PORT;
server.use(cors());

server.use(express.json());


const bookModal = require('./BookDB.js');

mongoose.connect(`${process.env.MONGO_SERVER}`);

const getBooksHandler = require("./bookFuncations.js");

server.get('/', homeHandler);
server.get('/getbooks', getBooksHandler);
server.get('*', notFoundHandler);

function homeHandler(req, res) {
    res.status(200).send(`Home route`);
}

function notFoundHandler(req, res) {
    res.status(404).send('NOT FOUND!!');
  }

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})