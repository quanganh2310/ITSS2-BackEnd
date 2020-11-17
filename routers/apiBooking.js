const express = require('express');
const apiBooking = express.Router();
const bookingController = require('../controllers/BookingController')

// apiBooking.post('/:id', (req,res) => { bookingController.createBooking(req,res) })
apiBooking.get('/', (req,res)=>{bookingController.allBooking(req,res)})
apiBooking.get('/:id',(req,res)=>{bookingController.detailBooking(req,res)})

module.exports = apiBooking;
