const express = require('express');
const router = express.Router();
const PresentRouter = require('./apiPresent');
const ComboRouter = require('./apiCombo');
const PalaceRouter = require('./apiPalace');
const BookingRouter = require('./apiBooking');

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/present', PresentRouter)
router.use('/combo', ComboRouter)
router.use('/palace', PalaceRouter)
router.use('/bookingInfo', BookingRouter)

module.exports = router;
