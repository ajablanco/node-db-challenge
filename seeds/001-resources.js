
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Macbook Pro'},
        {id: 2, name: 'Black Paint'},
        {id: 3, name: 'TurboTax'}
      ]);
    });
};
