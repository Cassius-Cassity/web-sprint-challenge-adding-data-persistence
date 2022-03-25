// build your `Task` model here
const db = require('../../data/dbConfig')

function getTask() {
    return db('tasks');
}

async function add(task) {
    const [task_id] = await db('tasks').insert(task);
    return getTask().where({task_id}).first()
 
}

module.exports = { getTask, add }