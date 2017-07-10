const express = require('express');
const router = express.Router();
const Article = mongoose.model('Article')
const bodyParser = require('body-parser');
//STORES DATA
//POST
//Create record: route: /blogs => /home
router.post('/blogs', (req, res) => {
  var newArticle = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: req.body.date
  }
  Article.create(newArticle, (err, record) => {
    if (err) {
      console.log(err);
    } else {
      console.log(record);
    }
    res.redirect('/home')
  })
})
//Read specific record: route: /blogs/:id => /show/
router.get('/blogs/:id', (req, res) => {
  var articleId = req.params.id
  Article.findById(articleId, (err, article) => {
    if (err) {
      console.log(err);
    } else {
      res.locals.article = article
      res.redirect('/show/')
    }
  })
})
//Update specific record: /blogs/:id => /show/
router.post('/blogs/:id', (req, res) => {
  var userId = req.params.id
  Article.findById(userId, (err, article) => {
    res.locals.article = article

    article.save()
  })
  res.redirect('/show')
})
//Delete specific record: route: /blogs/:id => /home
router.post('/blogs/:id', (req, res) => {
  var userId = req.params.id
  Article.remove(_id: userId, (err, deleted) => {
    if (err) {
      console.log(err);
    } else {
      deleted.result
    }
  })
  res.redirect('/')
})

module.exports = router