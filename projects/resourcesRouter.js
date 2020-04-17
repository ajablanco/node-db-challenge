const express = require('express')
const Resources = require('./resourcesModel');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get resources'})
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Resources.findById(id)
    .then(resource => {
      if (resource) {
        res.status(200).json(resource);
    } else {
        res.status(404).json({message: 'could not find resources with that id'})
    }
    })
    .catch(err => {
        res.status(500).json({message: 'failed'})
    });
});




router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Resources.findById(id)
    .then(resource => {
        if (resource) {
        Resources.update(id, changes)
        .then(updatedResource => {
            res.status(200).json(updatedResource);
        });
    } else {
        res.status(404).json({message: 'could not find resources with that id'})
    }
}) .catch(err => {
    res.status(500).json({message: 'failed'})
});
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Resources.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json({deleted});
        } else {
            res.status(404).json({message: 'could not find that resources with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'failed'})
    })
})

module.exports = router;