const ComboModel = require('../models/Combo.js');
const Combo = new ComboModel

let allCombo =(req,res)=>{
    Combo.getAll((err, data)=>{
        if(err) res.status(401).send({success : 0, message : "err"})
        else res.status(201).send({success:1, allCombo : data})
    })
}

let detailCombo =(req,res)=>{
    var id = req.params.id 
    Combo.getById(id, (err, data) => {
        if (!err) res.status(201).send({ success: 1, allCombo : data })
        else res.status(500).send({ success: 0, message: "fail ???"  })
    })
}

module.exports = {
    allCombo, detailCombo
}
