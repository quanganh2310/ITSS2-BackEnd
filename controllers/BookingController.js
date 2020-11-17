const BookingModel = require('../models/BookingInfo');
const Booking = new BookingModel


let createBooking = (req, res) => {
    let booking = {
        id: "",
        username: req.body.name,
        userPhoneNumber: req.body.phone_number,
        time: req.body.time,
        date: req.body.date,
        peopleNumber: req.body.people_number,
        placeID:  req.body.placeID,
        placeName:  req.body.placeName,
        placeImage: req.body.placeImage,
        placeAddress:  req.body.placeAddress,
        bookingAt: req.body.bookingAt,
    };

    console.log(res.body)

    Booking.createNew(booking, (err, data) => {
        if(err) res.status(401).send({success : 0, message : "err"})
        else res.status(201).send({success:1, allBooking : data})
    })
}

let allBooking =(req,res)=>{
    Booking.getAll((err, data)=>{
        if(err) res.status(401).send({success : 0, message : "err"})
        else res.status(201).send({success:1, allBooking : data})
    })
}

let detailBooking =(req,res)=>{
    var id = req.params.id 
    Booking.getById(id, (err, data) => {
        if (!err) res.status(201).send({ success: 1, Booking : data })
        else res.status(500).send({ success: 0, message: "fail ???"  })
    })
}

module.exports = {
    createBooking, allBooking, detailBooking
}
