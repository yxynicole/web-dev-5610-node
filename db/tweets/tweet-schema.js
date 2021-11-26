const mongoose = require('mongoose');

const schema = new mongoose.Schema({
                                   topic: String,
                                   posted: {type: Date, default: Date.now},
                                   userName: String,
                                   verified: {type: Boolean, default: false},
                                   handle: String,
                                   title: String,
                                   tweet: String,
                                   attachments: {
                                       image: String
                                   },
                                   time: String,
                                   "logo-image": String,
                                   "avatar-image": String,
                                   stats: {
                                       comments: {type: Number, default: 0},
                                       retweets: {type: Number, default: 0},
                                       likes: {type: Number, default: 0}
                                   }
                               }, {collection: "tweets"});
module.exports = schema;
