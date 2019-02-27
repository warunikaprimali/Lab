const express= require('express'); //import express framework to the app
var router =express.Router();
var Reservation=require('../models/reservation');//import the implemented model user


/*--------reservation open-----------   */
router.post("/addreservation",(req,res) =>{
    const newReservation = new Reservation({
        lab:  req.body.lab,
        date: req.body.date,
        from: req.body.from,
        to: req.body.to,
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        year: req.body.year,
        reason: req.body.reason,
        state: "Not confirmed"
    });

    Reservation.saveReservation(newReservation, function (err,reservation) {
        if(!err){
            res.send(reservation);
        }

        else{
            console.log('Error in Reservation save :' + JSON.stringify(err, undefined, 2));
        }
    });
});
/*-------- reservation close-----------   */
router.get("/newreservations",(req,res) =>{
    Reservation.getReservation(function (err,reservation) {
        if (err){
            throw err;
        }
        if(reservation){
            res.json(reservation);
        }

       if (!reservation) {
           res.json({state:false,msg:"no reservation found"});
        }
    });
});

router.post("/confirm",(req,res) =>{
    const _id=req.body._id;
    Reservation.confirmReservation(_id,function (err,reservation) {
        if (err){
            throw err;
        }
        if(reservation){
            res.json(reservation);
        }

        if (!reservation) {
            res.json({state:false,msg:"No reservation"});
        }
    });
});
router.post("/delete",(req,res) =>{
    const _id=req.body._id;
    Reservation.deleteReservation(_id,function (err,reservation) {
        if (err){
            throw err;
        }
        if(reservation){
            res.json(reservation);
        }

        if (!reservation) {
            res.json({state:false,msg:"No reservation"});
        }
    });
});

router.get("/viewconfirmed",(req,res) =>{
    Reservation.confirmedReservation(function (err,reservation) {
        if (err){
            throw err;
        }
        if(reservation){
            res.json(reservation);
        }

        if (!reservation) {
            res.json({state:false,msg:"no reservation found"});
        }
    });
});


router.get("/viewremoved",(req,res) =>{
    Reservation.removedReservation(function (err,reservation) {
        if (err){
            throw err;
        }
        if(reservation){
            res.json(reservation);
        }

        if (!reservation) {
            res.json({state:false,msg:"no reservation found"});
        }
    });
});
router.get('/confirmedCount', function (req, res) {
    Reservation.confirmedCount(function (err, count) {
        if(err) throw err;

        if (!count){
            res.json({state:false,msg:"No reservations found"});
        }

        if(count){
            res.json(count);
        }

    })
});
router.get('/getreservationsuser', function (req, res) {
    Reservation.lastreservation(function (err, reservation) {
        if (err) {
            throw err;
        }
        if (reservation) {
            Reservation.getallreservations(reservation.date, function (err, reservation) {
                if (err) {
                    throw err;
                }
                if (reservation) {
                    res.json(reservation);
                }

                if (!reservation) {
                    res.json({state: false, msg: "no reservation found"});
                }
            });
        }
        if (!reservation) {
            res.json({state: false, msg: "no reservation found"});
        }
    });
});


router.post('/yearmonthcount', function (req, res) {
    const yearmonth=req.body.yearmonth;
    Reservation.yearmonthcount(yearmonth,function (err, count) {
        if(err) throw err;

        if (!count){
            res.json("0");
        }

        if(count){
            res.json(count);
        }

    })
});

router.post('/currentReservations', function (req, res) {
    const date = req.body.date;
    const lab=req.body.lab;

    Reservation.currentReservations(lab,date,function (err, count) {
        if(err) throw err;

        if (!count){
            res.json("0");
        }

        if(count){
            res.json(count);
        }

    })
});

router.post('/userreservation', function (req, res) {
    const email=req.body.email;

    Reservation.userreservation(email,function (err, reservation) {
        if (err) {
            throw err;
        }
        if (reservation) {
            res.json(reservation);
        }
        if (!reservation) {
            res.json({state: false, msg: "no reservation found"});
        }
    });
});
router.post('/userreservationconfirmed', function (req, res) {
    const email=req.body.email;

    Reservation.userreservationconfirmed(email,function (err, reservation) {
        if (err) {
            throw err;
        }
        if (reservation) {
            res.json(reservation);
        }
        if (!reservation) {
            res.json({state: false, msg: "no reservation found"});
        }
    });
});
router.post('/userreservationremoved', function (req, res) {
    const email=req.body.email;

    Reservation.userreservationremoved(email,function (err, reservation) {
        if (err) {
            throw err;
        }
        if (reservation) {
            res.json(reservation);
        }
        if (!reservation) {
            res.json({state: false, msg: "no reservation found"});
        }
    });
});

router.get('/cCount', function (req, res) {
    Reservation.cCount(function (err, count) {
        if(err) throw err;

        if (!count){
            res.json(0);
        }

        if(count){
            res.json(count);
        }

    })
});

router.get('/rCount', function (req, res) {
    Reservation.rCount(function (err, count) {
        if(err) throw err;

        if (!count){
            res.json(0);
        }

        if(count){
            res.json(count);
        }

    })
});


router.get('/uCount', function (req, res) {
    Reservation.uCount(function (err, count) {
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