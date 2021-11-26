const model = require('./model');               // load model
const findAllMovies = () => model.find();      // use model's find function to implement findAllMovies
module.exports ={
    findAllMovies                              // export as an API to use in service
}