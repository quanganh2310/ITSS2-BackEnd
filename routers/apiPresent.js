const express = require('express');
const apiPresent = express.Router();
const PresentController = require('../controllers/PresentController')

apiPresent.get('/', (req,res)=>{PresentController.allPresent(req,res)})
apiPresent.get('/:id',(req,res)=>{PresentController.detailPresent(req,res)})

module.exports = apiPresent;
