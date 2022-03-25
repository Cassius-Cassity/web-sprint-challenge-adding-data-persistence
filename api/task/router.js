// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/tasks', (req, res, next) => {
    Task.getTask(req.params.body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
}) 

router.post('/tasks', (req, res, next) => {
    Task.add(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the task router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router