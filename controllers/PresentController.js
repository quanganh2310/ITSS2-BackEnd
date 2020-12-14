const PresentModel = require('../models/Present.js');
const Present = new PresentModel

let allPresent =(req,res)=>{
    Present.getAll((err, data)=>{
        if(err) res.status(401).send({success : 0, message : "err"})
        else res.status(201).send({success:1, allPresent : data})
    })
}

let detailPresent =(req,res)=>{
    var id = req.params.id 
    Present.getById(id, (err, data) => {
        if (!err) res.status(201).send({ success: 1, allPresent : data })
        else res.status(500).send({ success: 0, message: "fail ???"  })
    })
}

module.exports = {
    allPresent, detailPresent
}
