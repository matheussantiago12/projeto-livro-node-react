const usersData = require('../data/usersData');

exports.getUser = (user) => {
    return usersData.getUser(user);
}

exports.saveUser = (user) => {
    return usersData.saveUser(user);
}