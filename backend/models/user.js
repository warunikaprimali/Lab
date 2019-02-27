//this file behave as moodel
const mongoose= require('mongoose');
const schema=mongoose.Schema;//schema behave like table
const bcrypt=require('bcryptjs');


const userSchema=new schema({
	name:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true},
	type:{type:String,required:true},
});
const User=module.exports=mongoose.model("User",userSchema); //export User schema for further use 

/*save user function for user registration*/
module.exports.saveUser = function (newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            if(err){
                throw err;
            }

            else{
                newUser.save(callback);
            }
        });
    });
};
/*check the user validation start*/
module.exports.findByEmail=function(email,callback){
	const query={email:email};  //find the relevnt email address inthe database
	User.findOne(query,callback);
}
/*check the user validation end*/

module.exports.passwordCheck=function(plainpassword,hash,callback){
	// Load hash from your password DB.
	bcrypt.compare(plainpassword, hash, function(err, res) {
	     if(err){
	        throw err;
	    }

	    else{
	        callback(null,res);
	    }
	});
}

module.exports.finduserbyid=function(id,callback){
	User.findOne(id,callback);
}
module.exports.userCount = function (callback) {
    User.count( callback);
}