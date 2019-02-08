const express = require('express')
const todosController = express.Router()
const Todo = require('../models/todo')

todosController
    .get('/', async (req, res) => {
        const todos = await Todo.find().select('title').sort({"_id": -1});
        res.set("Access-Control-Allow-Origin", "*");
        res.json(todos);
    });
// Not required for this app
todosController
    .get('/:id', async (req, res) => {
        const todo = await Todo.findById(req.params.id)
        res.set("Access-Control-Allow-Origin", "*");
        res.json(todo);
    });

todosController
    .post('/', async (req, res) => {
        if (!req.body) {
            return res.status(403).end();
        }
        const todo = await Todo.create(req.body)
        res.set("Access-Control-Allow-Origin", "*");
        res.json(todo);
    });

todosController
    .put('/:id', async (req, res) => {
        if (!req.body) {
            return res.status(403).end();
        }
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            $upsert: true,
            new: true
        })
        res.set("Access-Control-Allow-Origin", "*");
        res.json(todo);
    });

todosController
    .delete('/:id', async (req, res) => {
        const todo = await Todo.deleteOne({
            _id: req.params.id
        })
        res.set("Access-Control-Allow-Origin", "*");
        res.json(todo);
    });

module.exports = todosController