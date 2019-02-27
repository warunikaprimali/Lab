//this behaves as the controller
const express= require('express'); //import express framework to the app
var router =express.Router();
var User=require('../models/user');//import the implemented model user


/*---------for session token-------------------*/
const passport= require('passport');
var jwt=require('jsonwebtoken');
const config=require('../db');
/*----------------------------------------------*/


/*--------user registration open-----------   */

/*--------user registration close-----------   */

/*user validate starts*/
router.post("/login",function(req,res){
    const email=req.body.email;
    const password = req.body.password;

    User.findByEmail(email, function (err, user) {
        if(err) throw err;

        if (!user){
            res.json({state:false,msg:"No user found"});
        }

        if(user) {
            User.passwordCheck(password, user.password, function (err, match) {
                if (err) {
                    res.json({state: false, msg: "your password is incorrect"});
                }

                if (match) {
                    const token = jwt.sign(user, config.secret, {expiresIn: 86400 * 3});
                    res.json(
                        {
                            state: true,
                            token: "JWT " + token,
                            user: {
                                id: user._id,
                                name: user.name,
                                username: user.username,
                                email: user.email,
                                type:user.type,

                            }
                        }
                    )

                }

                else {
                    res.json({state: false, msg: "password does not match"});
                }
            });

        }

    });
})
/*user validate ends*/

router.get('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.json({user:req.user});
    }
);


router.post("/register",function (req,res) {
    console.log(req.body.name);

    const newUser = new User({
        name:  req.body.name,
        email: req.body.email,
        password: req.body.password,
        type:"user",
    });


    User.saveUser(newUser, function (err,user) {
        if(!err){
            res.json({state:true, msg:"data Inserted"});
        }

        else{
            res.json({state:false, msg:"data Is Not Inserted"});
        }
    });
});
router.get('/userCount', function (req, res) {
    User.userCount(function (err, count) {
        if(err) throw err;

        if (!count){
            res.json(0);
        }

        if(count){
            res.json(count);
        }

    })
});
module.exports = router;