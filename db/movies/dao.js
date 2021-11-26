// load model
const model = require('./model');
// use model's find function to implement findAllMovies
const findAllMovies = () => model.find();

// implement function to remove a movie given its ID
const deleteMovie = (id) =>{
    // use mongoose model removeOne function to remove movie by ID
    return model.deleteOne({_id: id});
}

// implement function to insert a movie into the database
const createMovie = (movie) =>{
    return model.create(movie);
}

const findMovieById = (id) =>{
    return model.findById(id);
}
// use the model's updateOne function to
const updateMovie = (id, movie) =>{
    // update the movie whose ID is id
    // update with new movie object
    return model.updateOne({_id: id},
                    {$set: movie});
}

module.exports ={
    findAllMovies,deleteMovie,createMovie,findMovieById,updateMovie
}