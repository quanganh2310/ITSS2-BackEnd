const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()
const port = 8000
const router = require('./routers/router')

app.use(cors())
// var corsOptions = {
//   origin: "http://localhost:8000"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded()); app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
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

const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://ailavip1st:Optimus2310@cluster0.gj2pf.mongodb.net/<dbname>?retryWrites=true&w=majority"

const client = new MongoClient(uri);

const db = require("./models");
const dbConfig = require("./config/db.config")
const Role = db.role;

db.mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
  console.log("Successfully connect to MongoDB.");
  initial();
})
.catch(err => {
  console.error("Connection error", err);
  process.exit();
});;

// db.mongoose
//   .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     initial();
//   })
//   .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

require('./routers/auth')(app);
require('./routers/user')(app);
require('./routers/order')(app);
require('./routers/presentOrder')(app);
require('./routers/comboOrder')(app);
require('./routers/comment')(app);
require('./routers/presentComment')(app);
