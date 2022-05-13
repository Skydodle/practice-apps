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

// POST method route
app.post('/entries', (req, res) => {
  let entry = req.body;
  db.save(entry)
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('unable to save to database')
    })
  //res.send('hello world')
})

// GET method route
app.get('/entries', (req, res) => {
  db.getAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('server unable to process request')
    })
  //res.send('GET request to the homepage')
})

// Get One
app.get('/entries/:word', (req, res) => {
let query = req.query;
  db.getOne(query)
    .then((data) => {
      console.log(data)
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('server unable to process request')
    })
    //     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(entry);
//     }
//   })
})
  //res.send('GET request to the homepage')


// PUT or PATCH method?

// DELETE method?

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);