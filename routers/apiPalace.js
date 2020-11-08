const express = require('express');
const apiPalace = express.Router();
const palaceController = require('../controllers/palaceController')


apiPalace.get('/', (req,res)=>{palaceController.allPalace(req,res)})
apiPalace.get('/:id',(req,res)=>{palaceController.detailPalace(req,res)})

module.exports = apiPalace;
