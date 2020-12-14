const express = require('express');
const apiCombo = express.Router();
const ComboController = require('../controllers/ComboController')

apiCombo.get('/', (req,res)=>{ComboController.allCombo(req,res)})
apiCombo.get('/:id',(req,res)=>{ComboController.detailCombo(req,res)})

module.exports = apiCombo;
