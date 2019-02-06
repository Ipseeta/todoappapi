const express = require('express')
const todosController = express.Router()
const Todo = require('../models/todo')

todosController
  .post('/', async (req, res, next) => {
    const todo = await Todo.create(req.body)
    return res.json({ todo: todo });
  })

todosController
  .put('/:id', async (req, res, next) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    return res.json({ todo: todo });
  })

todosController
  .get('/', async (req, res, next) => {
    const todos = await Todo.find().select('title')
    return res.json({ todos: todos });
  })

todosController
  .get('/:id', async (req, res, next) => {
    const todo = await Todo.findById(req.params.id)
    return res.json({ todo: todo });
  })

todosController
  .delete('/:id', async (req, res, next) => {
    const todo = await Todo.deleteOne({ _id: req.params.id })
    return res.json({ todo: todo });
  })

module.exports = todosController