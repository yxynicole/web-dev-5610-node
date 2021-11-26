const model = require('./tweet-model');

const findAllTweets = () => {
    return model.find();
};

const createTweet = (tweet) => {
    const newTweet = {
        topic: "new tweet",
        userName: "white",
        handle: "white",
        ...tweet
    }
    return model.create(newTweet);
};

const deleteTweet = (id) => {
    return model.deleteOne({_id: id});
};

const updateTweet = (id, tweet) => {
    return model.updateOne({_id: id}, {$set: tweet});
};

module.exports = {
    findAllTweets,
    createTweet,
    deleteTweet,
    updateTweet
};
