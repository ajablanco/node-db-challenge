const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
  }

function find() {
    return db('tasks');
}

function findById(id) {
    return db('tasks')
    .where({id})
    .first()
}

function insert(task) {
    return db('tasks')
    .insert(resource, "id")
    .then(([id]) => find().where({id}));
}

function update(id, changes) {
    return db('tasks')
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? findById(id) : null))
}

function remove(id) {
    return db('tasks')
    .where("id", id)
    .del()
}
