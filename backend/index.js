const express= require('express'); //import express framework to the app
const bodyParser =require('body-parser');//allow us to send json data to node.js api.
const passport=require('passport');
const cors=require('cors');


// const path=require('path'); //use for routings
var app=express(); //initialize app with express
const config=require('./db.js');
var userController=require('./controllers/userControllers');
require('./config/passport')(passport);
var reservationController=require('./controllers/reservationController');
var newsController=require('./controllers/newsController');


app.use(bodyParser.urlencoded({extend:true})); //can access the data coming from url encode by adding this
app.use(bodyParser.json());//can access json data with our app by adding this
app.use(cors({origin:'http://localhost:4200'}));

/*--------------apply session-----------*/
app.use(passport.initialize()); //start using passport with app
app.use(passport.session()); //start session
/*-----------------------------------------------------------------*/

app.listen(3000, function ( ) {							//set port to the app
    console.log('Server started at port : 3000')
});

app.use('/user',userController);
app.use('/reservation',reservationController);
app.use('/news',newsController);