/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        email: 'amar@email.com',
        password: 'July2019'
      },
      {
        id: 2,
        email: 'amar1@email.com',
        password: 'July2019'
      },
      {
        id: 3,
        email: 'amar2@email.com',
        password: 'July2019'
      }
    ]);
  });
};
