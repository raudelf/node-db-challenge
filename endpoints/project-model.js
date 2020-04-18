const db = require('../data/db-config.js');

function find() {
    return db('projects');
};

function findTasks(id) {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .select('p.project_name', 'p.project_desc', 't.id', 't.task_description', 't.task_notes', 't.completed')
        .orderBy('t.id')
        .where('t.project_id', id);
};

function findResources() {
    return db('resources');
};

function findProjRes(id) {
    return db('project_resources as s')
        .join('projects as p', 's.project_id', 'p.id').select('p.id', 'p.project_name', 'p.project_desc')
        .join('resources as r', 's.resource_id', 'r.id').select('r.id', 'r.resource_name')
        .orderBy('r.id')
        .where('s.project_id', id)
        
}

function addProj(data) {
    return db('projects')
        .insert(data);
}

function addTask(data) {
    return db('tasks')
        .insert(data);
};

function addResource(data) {
    return db('resources')
        .insert(data);
};

module.exports = {
    find,
    findTasks,
    findResources,
    findProjRes,
    addProj,
    addTask,
    addResource,
}