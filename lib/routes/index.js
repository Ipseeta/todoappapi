const express = require('express');
const router = express.Router();
const todos = require('../controllers/todos.controller');

router.use('/todos', todos);
module.exports = router;