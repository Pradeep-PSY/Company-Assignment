const mongoose = require('mongoose');

require('dotenv').config();

const connection = mongoose.connect("mongodb+srv://pradeepD:pradeep123@cluster0.r7tllok.mongodb.net/quizz?retryWrites=true&w=majority");

module.exports = connection;