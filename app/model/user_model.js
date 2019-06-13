var sql = require('../../config/database.js');


var User = function(user) {
    this.id = user.id;
    this.user_name = user.user_name;
    this.email = user.email;
    this.password = user.password;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.role_id = user.role_id;
    this.is_deleted = user.is_deleted;
    this.created_on = new Date();
    this.updated_on = new Date();
}

User.createUser = function(newUser, result) {
    sql.get().query("insert into users set ?", newUser, (err, res)=> {
        if(err) {
            console.log('Error', err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

module.exports = User;