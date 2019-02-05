const express = require('express')
const todosController = express.Router()
const Todo = require('../models/todo')

todosController
  .post('/', async (req, res, next) => {
    const todo = await Todo.create(req.body)
    res.status(200).send(todo)
  })

todosController
  .put('/:id', async (req, res, next) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    res.status(200).send(todo)
  })

todosController
  .get('/', async (req, res, next) => {
    const notes = await Todo.find()
    res.status(200).send(notes)
  })

todosController
  .get('/:id', async (req, res, next) => {
    const todo = await Todo.findById(req.params.id)
    res.status(200).send(todo)
  })

todosController
  .delete('/:id', async (req, res, next) => {
    const todo = await Todo.deleteOne({ _id: req.params.id })
    res.status(200).send(todo)
  })

module.exports = todosController