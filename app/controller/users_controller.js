var User = require('../model/user_model.js');

exports.signIn = function(req,res) {
    res.send('hello');
}

exports.createUser = function(req, res) {
    let newUser = new User(req.body);
    User.createUser(newUser, (err, user)=> {
        if(err) {
            res.send(err);
        }
        res.json(user);
    })
}