// const express = require('express')
import express from 'express'
import HelloController from './controllers/hello-controller.js'
import UsersController from './controllers/users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import cors from 'cors'


const app = express()
// app.get('/hello', (req, res) => {res.send('Hello World!')})  // 
app.use(cors()) // enable ALL CORS requests (client requests from other domain)
app.use(express.json()); // parse JSON from HTTP request body

TuitsController(app);
// HelloController(app);
UsersController(app);

app.listen(4000 || process.env.PORT)