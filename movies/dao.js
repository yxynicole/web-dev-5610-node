// load model
const model = require('./model');
// use model's find function to implement findAllMovies
const findAllMovies = () => model.find();

// implement function to remove a movie given its ID
const deleteMovie = (id) =>{
    // use mongoose model removeOne function to remove movie by ID
    return model.deleteOne({_id: id});
}

module.exports ={
    findAllMovies,deleteMovie
}