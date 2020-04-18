
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Break the Bank', project_desc: 'This project is all about breaking the bank.'},
        {project_name: 'Save the Bank', project_desc: 'This project is all about saving the bank.'},
        {project_name: 'Raise the Bank', project_desc: 'This project is all about raising the bank.'},
      ]);
    });
};
