
const User = require('../models/user');

const createUser = async (userData) => {
    const user = new User(userData);
    return user.save();
};

const getAllUsers = async () => {
    return User.find();
};

module.exports = {
    createUser,
    getAllUsers,
};
