const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/glossary', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

let wordSchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
})

let Entry = mongoose.model('Entry', wordSchema);

let save = (entry) => {
  let newEntry = new Entry({
    word: entry.word,
    definition: entry.definitioin
  }).save()
}
module.exports.save = save;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
