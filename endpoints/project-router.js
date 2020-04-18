const express = require('express');

const Schemes = require('./project-model.js');

const router = express.Router();


// GET Requests
router.get('/projects', (req, res) => {
    Schemes.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects'});
        });
});

router.get('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;

    Schemes.findTasks(id)
        .then(tasks => {
            if (tasks.length) {
                res.json(tasks);
            } else {
                res.status(404).json({ message: `Could not find steps for project ${id}`});
            };
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks'})
        })
})

router.get('/projects/:id/res', (req, res) => {
    const { id } = req.params;

    Schemes.findProjRes(id)
        .then(projRes => {
            if (projRes.length) {
                res.json(projRes);
            } else {
                res.status(404).json({ message: `Could not find resources for project ${id}`});
            };
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project resources'})
        })
})

router.get('/resources', (req, res) => {
    Schemes.findResources()
        .then(recs => {
            res.json(recs);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources'})
        });
});

// POST Requests
router.post('/projects', (req, res) => {
    const projData = req.body;

    if(projData.project_name) {
        Schemes.addProj(projData)
            .then(proj => {
                res.status(201).json(proj);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to create new project'})
            });
    } else {
        res.status(400).json({ error: 'You must include a project name in your post'})
    };
})

router.post('/projects/tasks', (req, res) => {
    const taskData = req.body;

    if(taskData.project_id && taskData.task_description) {
        Schemes.addTask(taskData)
            .then(task => {
                res.status(201).json(task);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to add task'})
            });
    } else {
        res.status(400).json({ error: 'You must include an existing project id and task description'})
    }
})

router.post('/resources', (req, res) => {
    const resData = req.body;

    if(resData.resource_name) {
        Schemes.addResource(resData)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to create new resource'})
            });
    } else {
        res.status(400).json({ error: 'You must include a resource name in your post'})
    };
});

router.post('/projects/resources', (req, res) => {
    const resData = req.body;

    if(resData.project_id && resData.resource_id) {
        Schemes.addProjRes(resData)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to create new project resource'})
            });
    } else {
        res.status(400).json({ error: 'You must include a project id and resource id in your post'})
    };
});

module.exports = router;