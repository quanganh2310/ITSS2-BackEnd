const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/router')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    next();
});

app.use('/',router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}
                localhost:3000/palace => get all palace
                localhost:3000/palace/:id => get palace by id            
              `)
})
