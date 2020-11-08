const express = require('express');
const router = express.Router();
const PalaceRouter = require('./apiPalace');

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/palace', PalaceRouter)

module.exports = router;
