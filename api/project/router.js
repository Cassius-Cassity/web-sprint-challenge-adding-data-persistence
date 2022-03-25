// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')

router.get('/projects', (req, res, next) => {
    Projects.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.post('/projects', (req, res, next) => {
    Projects.add(req.body)
        .then(projects => {
            res.status(201).json(projects)
        })
        .catch(next)
})


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the projects router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router