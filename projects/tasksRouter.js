const express = require('express')
const Tasks = require('./tasksModel');
const router = express.Router();

router.get('/', (req, res) => {
    Tasks.find()
    .then(tasks=> {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get tasks'})
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Tasks.findById(id)
    .then(task => {
      if (task) {
        res.status(200).json(resource);
    } else {
        res.status(404).json({message: 'could not find tasks for that id'})
    }
    })
    .catch(err => {
        res.status(500).json({message: 'failed'})
    });
});




router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Tasks.findById(id)
    .then(task => {
        if (task) {
        Tasks.update(id, changes)
        .then(updatedTask => {
            res.status(200).json(updatedTask);
        });
    } else {
        res.status(404).json({message: 'could not find tasks for that id'})
    }
}) .catch(err => {
    res.status(500).json({message: 'failed'})
});
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Tasks.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json({deleted});
        } else {
            res.status(404).json({message: 'could not find tasks for that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'failed'})
    })
})

module.exports = router;