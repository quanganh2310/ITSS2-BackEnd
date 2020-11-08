const PalaceModel = require('../models/Palace');
const Palace = new PalaceModel

let allPalace =(req,res)=>{
    Palace.getAll((err, data)=>{
        if(err) res.status(401).send({success : 0, message : "err"})
        else res.status(201).send({success:1, allPalace : data})
    })
}

let detailPalace =(req,res)=>{
    var id = req.params.id 
    Palace.getById(id, (err, data) => {
        if (!err) res.status(201).send({ success: 1, allPalace : data })
        else res.status(500).send({ success: 0, message: "fail ???"  })
    })
}

module.exports = {
    allPalace, detailPalace
}
