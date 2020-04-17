
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Install dependencies', project_id: 1, completed: true},
        {id: 2, description: 'Answer self-study questions', project_id: 1},
        {id: 3, description: 'Reach MVP', project_id: 1},
        {id: 4, description: 'Attempt Stretch', project_id: 1},
        {id: 5, description: 'Buy Paint from Michaels', project_id: 2},
        {id: 6, description: 'Paint canvases', project_id: 2},
        {id: 7, description: 'Complete taxes on turbo tax', project_id: 3},
        {id: 8, description: 'Follow up with accountant for business taxes', project_id: 3}
      ]);
    });
};
