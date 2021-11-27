const dao = require('./tweet-dao');

module.exports = (app) => {
    const findAllTweets = (req, res) => {
        dao.findAllTweets().then(tweets => res.json(tweets));
    }

    const createTweet = (req, res) => {
        dao.createTweet(req.body)
            .then((insertedTweet) => {
                return res.json(insertedTweet)
            });
    }
    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id).then((status) => res.send(status));
    }
    const likeTweet = (req, res) => {
        dao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status));
    }

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', createTweet);
    app.get('/api/tweets', findAllTweets);
}
