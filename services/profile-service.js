let _ = require('underscore');
let profiles = require('../data/profile.json');


module.exports = (app) => {
    const getCurrentProfile = (req, res)=>{
        res.json(profiles[0])
    }

    const updateCurrentProfile = (req, res) => {
        let profile = profiles[0];
        _.extend(profile,req.body);
        res.send(JSON.stringify(profile))
    }

    app.put('/api/profile', updateCurrentProfile);
    app.get('/api/profile',getCurrentProfile);
}
