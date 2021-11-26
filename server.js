const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev');
const express = require('express');
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

const profileService = require("./services/profile-service");
profileService(app);

const dbMovieService = require("./db/movies/service");            // load the movie service and pass it an instance of express
dbMovieService(app);

const tweeterService = require('./db/tweets/tweeter-service');
tweeterService(app);

// app.listen(process.env.PORT || 4000)
app.listen( 4000)
