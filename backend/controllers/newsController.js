const express = require('express');
var router = express.Router();

var  News  = require('../models/news');

router.post("/create",function (req,res) {
    console.log(req.body.content);
    const newNews = new News({
        content: req.body.content,
    });

    News.saveNews(newNews, function (err, news) {
        if (news) {
            res.send(news);
        }

        else {
            console.log('Error in User save :' + JSON.stringify(err, undefined, 2));
        }
    });

});


router.get("/news",function (req,res) {
    News.getNews(function (err, news) {
        if (err) throw err;

        if (!news) {
            res.json({state: false, msg: "No news"});
        }

        if (news) {
            res.json(news);
        }
    });

});


module.exports = router;