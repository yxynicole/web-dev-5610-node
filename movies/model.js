const mongoose = require('mongoose');                       // load mongoose library
const schema = require('./schema');                         // load movies schema
const model = mongoose.model('MovieModel',schema);     // create mongoose model from schema
module.exports = model;                                      // export so it can be used elsewhere