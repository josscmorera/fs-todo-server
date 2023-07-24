var express = require('express');
var router = express.Router();
const { allTodos, createTodo, editTodo, deleteTodo } = require('../controller/todosController');

router.get('/hello', (req, res) => {
    res.status(200).json({ message: "Hello from Express!" });
});

router.get('/all-todos', allTodos);
router.post('/new-todo', createTodo);
router.put('/status/:id', editTodo);
router.delete('/delete/:id', deleteTodo);


module.exports = router;