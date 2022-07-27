const { update } = require('../model/todo.model');
const TodoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
    try{
        const createdModel = await TodoModel.create(req.body);
        res.status(201).json(createdModel);
    } catch (err) {
        next(err);
    }
};

exports.getTodos = async (req, res, next) => {
    try
    {
        const allTodos = await TodoModel.find({});
        res.status(200).json(allTodos);
    } catch (err) {
        next(err);
    }
};

exports.getTodoById = async (req, res, next) => {
    try
    {
        const toDo = await TodoModel.findById(req.params.todoId);
        (toDo) ? res.status(200).json(toDo) : res.status(404).json(null);
    } catch (err) {
        next(err);
    }
};

exports.updateTodo = async (req, res, next) => {
    try
     {
        const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.todoId, req.body, { new: true, useFindAndModify: false});
        updatedTodo ? res.status(200).json(updatedTodo) : res.status(404).send();
     } catch (err) {
        next(err);
     }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const deletedTodo = await TodoModel.findByIdAndDelete(req.params.todoId);
        deletedTodo ? res.status(200).json(deletedTodo) : res.status(404).send();
    } catch (err)
    {
        next(err);
    }
};