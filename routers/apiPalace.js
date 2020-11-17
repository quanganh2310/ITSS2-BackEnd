const express = require('express');
const apiPalace = express.Router();
const palaceController = require('../controllers/palaceController')
const bookingController = require('../controllers/BookingController')

apiPalace.post('/:id/book', (req,res) => { bookingController.createBooking(req,res) })
apiPalace.get('/', (req,res)=>{palaceController.allPalace(req,res)})
apiPalace.get('/:id',(req,res)=>{palaceController.detailPalace(req,res)})

module.exports = apiPalace;
