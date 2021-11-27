const mongoose = require('mongoose');
const express = require('express');

const MONGODB_URI = 'mongodb://localhost:27017/webdev';
mongoose.connect(MONGODB_URI);

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods",
              "GET, POST, PUT, DELETE, OPTIONS");
   res.header("Access-Control-Allow-Credentials", "true");
   next();
});

app.get('/hello',(req,res)=>{
   res.send('Hello World! from server')
});

const movieService = require("./services/movies-service");
movieService(app);

//A8
// const tweeterService = require('./services/tweeter-service');
// tweeterService(app);

//A8
// const profileService = require("./services/profile-service");
// profileService(app);

const dbMovieService = require("./db/movies/service");            // load the movie service and pass it an instance of express
dbMovieService(app);

//A9
const tweeterService = require('./db/tweets/tweeter-service');
tweeterService(app);

const whoService = require('./db/who/who-service');
whoService(app);

const profileService = require('./db/profile/profile-service');
profileService(app)

app.listen(process.env.PORT || 4000)
