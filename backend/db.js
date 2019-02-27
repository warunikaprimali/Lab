const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/Lab',function (err) {
    if(!err){
        console.log('MongoDB connection succeeded....');//in inspect window(terminal )print this
    }

    else{
        console.log('Error in DB connection :'+JSON.stringify(err,undefined, 2));
    }
});
module.exports=mongoose;

module.exports={
	"secret":"myapplicationsecret"
};