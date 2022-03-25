// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/resources', (req, res, next) => {
    Resource.getResource(req.params.body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

router.post('/resources', (req, res, next) => {
    Resource.add(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the resource router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router