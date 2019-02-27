const mongoose = require('mongoose');
const schema = mongoose.Schema;

const newsSchema = new schema({
    content:{type:String, required:true},
});

const News = module.exports= mongoose.model("News",newsSchema );


module.exports.saveNews = function (newNews, callback) {
    newNews.save(callback);
}


module.exports.getNews = function (callback) {
    News.find(callback);
}

