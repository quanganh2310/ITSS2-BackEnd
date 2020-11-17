const express = require('express')
const app = express()
const port = 8000
const router = require('./routers/router')

app.use(express.urlencoded()); app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    next();
});

app.use('/',router)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}
                localhost:8000/palace => get all palace
                localhost:8000/palace/:id => get palace by id            
              `)
})
