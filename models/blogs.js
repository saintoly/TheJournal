//schema: arcitles
//title, type string
//content. type string
//date, type date
//author, type string
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/TheJournal',{ useMongoClient: true
});

const articlesSchema = new Schema({
  title: String,
  content: String,
  date: Date,
  author: String
})

const article = mongoose.model('article', articlesSchema)


module.exports = article