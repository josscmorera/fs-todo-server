const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

const todoSchema = new mongoose.Schema({
    _id : { type: String, default: uuidv4 },
    content: { type: String, required: true },
    status: {type: String, required: true},
    lastModified: { type: Date, default: Date.now },
    createAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model('Blog', todoSchema);

module.exports = Todo;