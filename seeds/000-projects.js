
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Sprint Challenge', description: 'Complete MVP, attempt Stretch'},
        {id: 2, name: 'Paint Canvases', description: 'Finish painting the ladies'},
        {id: 3, name: 'Finish Taxes', description: 'finish by May 15th'}
      ]);
    });
};
