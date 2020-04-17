const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
  }

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
    .where({id})
    .first()
}

function insert(project) {
    return db('projects')
    .insert(project, "id")
    .then(([id]) => find().where({id}));
}

function update(id, changes) {
    return db('projects')
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? findById(id) : null))
}

function remove(id) {
    return db('projects')
    .where("id", id)
    .del()
}
