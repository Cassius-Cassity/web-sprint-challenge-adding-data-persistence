const projects = [
    { project_name: 'Build APIs', project_description:'foo', project_completed:0},
    { project_name: 'web API', project_description:'bar', project_completed:0 },
  ]
  
  const resources = [
    { resource_name: 'knex', resource_description: 'very useful'},
    { resource_name: 'sqlite', resource_description: 'pain in the butt'},
  ]
  
  const project_resources =[
    { resource_id: 1, project_id: 1, quantity: 1},
    { resource_id: 2, project_id: 2, quantity: 2},
  ]
  
  const tasks = [
    { task_description: 'install dependencies', task_notes: 'use npm and write scripts', project_id: 1, task_completed:0},
    { task_description: 'build a server', task_notes: 'connect serverjs to indexjs', project_id: 1, task_completed:0},
    { task_description: 'download postman', task_notes: 'access browser', project_id: 2, task_completed:0},
    { task_description: 'use postman often', task_notes: 'test your work', project_id: 2, task_completed:0},
  ]
  
  exports.seed = async function(knex) {
    await knex('projects').truncate()
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
    } 