require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js')

const app = express();

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('hello world')
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);