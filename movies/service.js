const dao = require('./dao')

//accept express instance to create HTTP endpoints
module.exports = (app) => {
    //handle HTTP GET request
    const findAllMovies = (req, res) => {
        //use dao to retrieve all movies
        dao.findAllMovies()
            //respond with all movies
            .then(movies=>res.json(movies));
    }

    // handle HTTP DELETE request mapped to /rest/movies/:id
    const deleteMovie = (req, res) =>{
        //console.log("server, service.js: ------>", req)
        // remove movie from database with ID matching ID in params
        dao.deleteMovie(req.params.id).then((status) => res.send(status));
    }

    // handle HTTP POST request
    const createMovie = (req, res) =>{
        // get new movie from body and insert into database
        // respond to client with inserted movie
        dao.createMovie(req.body).then((insertedMovie) => res.json(insertedMovie));
    }


    app.post("/rest/movies", createMovie);
    app.delete("/rest/movies/:id", deleteMovie);
    //listen for HTTP GET and notify findAllMovies
    app.get("/rest/movies",findAllMovies)
}