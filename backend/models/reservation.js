//this file behave as moodel
const mongoose= require('mongoose');
const schema=mongoose.Schema;//schema behave like table
var dateOnly=require('dateonly');

const reservationSchema=new schema({
    lab:{type:String,required:true},
    date:{type:String,required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    role:{type:String,required:true},
    year:{type:String},
    reason:{type:String,required:true},
    state:{type:String, required:true},
});
const Reservation=module.exports=mongoose.model("Reservation",reservationSchema); //export User schema for further use

module.exports.saveReservation=function(reservation,callback){
    reservation.date=new dateOnly(reservation.date);
    reservation.save(callback);
}
module.exports.getReservation=function(callback){
    const query={state:"Not confirmed"};
    Reservation.find(query,callback);
}
module.exports.confirmReservation=function(id,callback){
  var reservation={
      state:"confirmed"
  }
  Reservation.findByIdAndUpdate(id,{$set:reservation},{new: true},callback);
}

module.exports.deleteReservation=function(_id,callback){
console.log(_id);
    var reservation={
        state:"removed"
    }
    Reservation.findByIdAndUpdate(_id,{$set:reservation},{new: true},callback);
}
module.exports.confirmedReservation=function(callback){
    const query={state:"confirmed"};
    Reservation.find(query,callback);
}
module.exports.removedReservation=function(callback){
    const query={state:"removed"};
    Reservation.find(query,callback);
}
module.exports.confirmedCount = function (callback) {
    const query = {state: "confirmed"};
    Reservation.count(query , callback);
}
module.exports.lastreservation = function (callback) {
    const query = {state: "confirmed"};
    Reservation.findOne(query ,null,{sort:{'date':1}} ,callback);
}
module.exports.userreservation = function (email,callback) {
    const query={email:email,state:"Not confirmed"};
    Reservation.find(query,callback);
    // Reservation.find(query,null,{sort:{'date':1}},callback);
}
module.exports.userreservationconfirmed = function (email,callback) {
    const query = {email:email,state:"confirmed"};
    Reservation.find(query,null,{sort:{'date':1}} ,callback);
}
module.exports.userreservationremoved = function (email,callback) {
    const query = {email:email,state:"removed"};
    Reservation.find(query,null,{sort:{'date':1}} ,callback);
}
module.exports.getallreservations = function (date1,callback) {
    const query = {state: "confirmed"};
    Reservation.find(query,null,{sort:{'lab':1}},callback);
}
module.exports.yearmonthcount = function (yearmonth,callback) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    var x=new Date(yearmonth);
    var n = month[x.getMonth()];
    var m=x.getFullYear();

    Reservation.count({"state":"confirmed","date":{$regex:'.*'+n+'.*'+m}},callback);
}


module.exports.currentReservations=function(lab,date,callback){


    var date=new dateOnly(date);
    var newreservation=Reservation({
        date:date
    })


    const query={date:newreservation.date,lab:lab,state:"confirmed"};
    Reservation.find(query,callback).select('from to date lab');
}
module.exports.cCount = function (callback) {
    const query = {state: "confirmed"};
    Reservation.count(query , callback);
}

module.exports.rCount = function (callback) {
    const query = {state: "removed"};
    Reservation.count(query , callback);
}
module.exports.uCount = function (callback) {
    const query = {state: "Not confirmed"};
    Reservation.count(query , callback);
}


