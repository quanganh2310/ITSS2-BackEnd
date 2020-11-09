var fs = require('fs');
fs.readFile('./data.json', (err, data) => {
    if (err) throw err;
    // let student = JSON.parse(data);
    console.log(student);
});
// var result = fs.readFileSync('./data.json')
// console.log(result)
// var obj = JSON.parse(result);
// console.log(obj.data)

// const jsonObj = `"k": [{ "d": {
//     "results": [
//      {
//          "po_number": "PO1001",
//          "product_id": "PD1001",
//          "message": "Exists",
//          "timestamp": "2016-05-01" 
//      }, {
//         "po_number": "PO1002",
//         "product_id": "PD1001",
//         "message": "Exists",
//         "timestamp": "2016-05-01" 
//     }]
// }}]`;

// var profile = JSON.parse(jsonObj);
// console.log(profile.k[0].d.results[1].po_number);