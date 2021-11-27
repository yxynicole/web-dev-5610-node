const mongoose = require('mongoose');
const schema = require('./who-schema');
const model = mongoose.model('whoModel', schema);
module.exports = model;