const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
  }

function find() {
    return db('resources');
}

function findById(id) {
    return db('resources')
    .where({id})
    .first()
}

function insert(resource) {
    return db('resourcess')
    .insert(resource, "id")
    .then(([id]) => find().where({id}));
}

function update(id, changes) {
    return db('resources')
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? findById(id) : null))
}

function remove(id) {
    return db('resources')
    .where("id", id)
    .del()
}
