const model = require('./who-model')

const findAllWho = ()=>{
    return model.find();
}
module.exports = {
    findAllWho,
};
