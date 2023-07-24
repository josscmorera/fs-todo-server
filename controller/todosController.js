const Todo = require('../model/Todo');

const createTodo = async (req, res) => {
    try {
        const newTodo = await new Todo(req.body)
        const saveTodo = await newTodo.save();
        res.status(200).json({ success: true, data: saveTodo });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

const allTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ success: true, data: todos });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

const editTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: updatedTodo });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: deletedTodo });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

const changeStatusTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { status: 'completed' }, { new: true });
        res.status(200).json({ success: true, data: updatedTodo });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}

module.exports = { createTodo, allTodos, editTodo, deleteTodo, changeStatusTodo };
