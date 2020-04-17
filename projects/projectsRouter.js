const express = require('express')
const Projects = require('./projectsModel');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get project'})
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Projects.findById(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
    } else {
        res.status(404).json({message: 'could not find project with that id'})
    }
    })
    .catch(err => {
        res.status(500).json({message: 'failed'})
    });
});

router.post('/', (req, res) => {
    const project = req.body;
    if (project.name && project.description) {
        Projects.insert(req.body)
        .then(project => {
            // req.project = project
            res.json(project)
            })
        .catch(err => {
                res.status(500).json({message: "failed"})
            })
    } else {
        res.status(404).json({message:"please enter name and description"})
};

})


router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Projects.findById(id)
    .then(project => {
        if (project) {
        Projects.update(id, changes)
        .then(updatedProject => {
            res.status(200).json(updatedProject);
        });
    } else {
        res.status(404).json({message: 'could not find project with that id'})
    }
}) .catch(err => {
    res.status(500).json({message: 'failed'})
});
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Projects.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json({deleted});
        } else {
            res.status(404).json({message: 'could not find that project with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'failed'})
    })
})

module.exports = router;