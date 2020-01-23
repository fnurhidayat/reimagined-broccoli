var fs = require('fs');
var users = require('../data/users.json');

function readUsers(id) {
    let user = users.filter(user => user.id == id)[0]
    delete user['password']

    console.log(user)
}
module.exports = readUsers;