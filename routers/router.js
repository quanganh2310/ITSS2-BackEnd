const express = require('express');
const router = express.Router();
const PalaceRouter = require('./apiPalace');
const BookingRouter = require('./apiBooking');

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/palace', PalaceRouter)
router.use('/bookingInfo', BookingRouter)

module.exports = router;
