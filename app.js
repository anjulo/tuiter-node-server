// const express = require('express')
import express from 'express'
// import HelloController from './controllers/hello-controller.js'
import UsersController from './controllers/users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import cors from 'cors'
import mongoose from 'mongoose';
import session from 'express-session';


// console.log(process.env.DB_CONNECTION_STRING)
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express()
// app.get('/hello', (req, res) => {res.send('Hello World!')})  // 
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))
app.use(express.json()); // parse JSON from HTTP request body
app.use(session({
  secret: "should be environment variable",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

UsersController(app); // should come first
TuitsController(app);

app.listen(process.env.PORT || 4000) // use process.env.PORT to get port from environment variable for Heroku deployment