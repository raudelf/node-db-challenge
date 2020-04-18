
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Computers', resource_description: 'Laptops to access the internets for research'},
        {resource_name: 'Conference Room', resource_description: 'Safe, quiet space to do research'},
        {resource_name: 'Shuttle Bus', resource_description: 'Transportation to execute project if needed'},
        {resource_name: 'Calculators', resource_description: 'To do the maths'},
        {resource_name: 'Books', resource_description: 'For research in case the internet is down and you know how to read'},
        {resource_name: 'Financial Advisors', resource_description: 'Professionals in the financial world to give tips and tricks'},
        {resource_name: 'Money and/or Credit Cards', resource_description: ''}
      ]);
    });
};
