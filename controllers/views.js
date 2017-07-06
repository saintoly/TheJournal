//RENDERING TEMPLATES

//GET
//  route: /home => renders home.ejs
//  route: /show/:id => renders show.ejs
//  route: /create => renders create.ejs
const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const Articles = mongoose.model("article")

router.get('/', (req,res) => {
	res.render('home', {articles:res.locals.articles})
});
router.get('/show', (req,res) => {
	res.render("show",{article: res.locals.article})
	var article_id = req.params.id
	Articles.findOne({_id:article_id}, function(err, article) {
    if(err){
    	console.log(err);
		
	}else{
		res.render("show",{article: article})
	}
})
});
router.get('/create', (req,res) => {
	res.render("create");
} )
