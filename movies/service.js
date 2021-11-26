const dao = require('./dao')                                //load dao
module.exports = (app) => {                                //accept express instance to create HTTP endpoints
    const findAllMovies = (req, res) => {                   //handle HTTP GET request
        dao.findAllMovies()                                 //use dao to retrieve all movies
            .then(movies=>res.json(movies));       //respond with all movies
    }
    app.get("/rest/movies",findAllMovies)                   //listen for HTTP GET and notify findAllMovies
}