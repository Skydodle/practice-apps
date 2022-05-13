const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/glossary', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

let wordSchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
})

let Entry = mongoose.model('Entry', wordSchema);

let save = (entry) => {
  return new Entry({
    word: entry.word,
    definition: entry.definition
  }).save()
}

let getAll = () => {
  return Entry.find({}).exec()
}

let getOne = (query) => {
  return Entry.findOne(query, 'word definition').exec();
}

module.exports.save = save;
module.exports.getAll = getAll;
module.exports.getOne = getOne;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
