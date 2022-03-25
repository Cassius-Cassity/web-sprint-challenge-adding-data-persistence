// build your server here and require it from index.js
const express = require('express')
const projectsRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api', projectsRouter)
server.use('/api', resourceRouter)
server.use('/api', taskRouter)

server.use('*', (req, res) => {
    res.json({ api: 'up' })
})

module.exports = server