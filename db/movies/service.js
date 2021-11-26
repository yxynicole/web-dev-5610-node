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
        // remove movie from database with ID matching ID in params
        dao.deleteMovie(req.params.id).then((status) => res.send(status));
    }

    // handle HTTP POST request
    const createMovie = (req, res) =>{
        // get new movie from body and insert into database
        // respond to client with inserted movie
        dao.createMovie(req.body).then((insertedMovie) => res.json(insertedMovie));
    }

    // handle HTTP GET request mapped to /rest/movies/:id
    const findMovieById = (req, res) => {
        // retrieve movie from database with ID matching ID params
        // respond to client with movie from database
        dao.findMovieById(req.params.id)
            .then(movie => res.json(movie));
    }

    // handle HTTP PUT request
    const updateMovie = (req, res) => {
        // retrieve movie from body and ID from request parameter
        // send update status back to the client
        dao.updateMovie(req.params.id, req.body)
            .then(status => res.send(status));
    }

    app.put("/rest/movies/:id", updateMovie);
    app.get("/rest/movies/:id", findMovieById);
    app.post("/rest/movies", createMovie);
    app.delete("/rest/movies/:id", deleteMovie);
    //listen for HTTP GET and notify findAllMovies
    app.get("/rest/movies",findAllMovies)
}