const mongoose = require('mongoose');                       // load mongoose library
const schema = mongoose.Schema({                    // create schema
                                   title: String,           // title property of type String
                                   rating: Number           // rating property of type Number
                               },
                               {collection: 'movies'});   // which collection name
module.exports = schema;                                        // export schema so it can be used elsewhere
