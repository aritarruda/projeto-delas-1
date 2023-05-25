const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://admin:GaSUkMjnVMZPoLQg@anarita.lqarr9u.mongodb.net/delas");

let db = mongoose.connection;

module.exports = db ;