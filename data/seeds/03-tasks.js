
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, task_description: 'Spend all the money you have in your bank account.', task_notes: 'Treat yo self!'},
        {project_id: 1, task_description: 'Call your credit card company and ask for a credit line raise.', task_notes: 'It\'s your money and you need it now!'},
        {project_id: 1, task_description: 'Max them out when you\'re done using your money.', task_notes: 'Why not?'},
        {project_id: 1, task_description: 'Cry about it.', task_notes: 'Sad face'},
        {project_id: 2, task_description: 'Look in the mirror and ask yourself why you\'re like this.', task_notes: 'Why u do dis'},
        {project_id: 2, task_description: 'Sign up to Credit Karma to and look for advice.', task_notes: 'Better yo self'},
        {project_id: 2, task_description: 'Start paying off your debt.', task_notes: 'Trust the process, don\'t give up!'},
        {project_id: 3, task_description: 'Successfuly Pay off your debt', task_notes: 'What a relief!'},
        {project_id: 3, task_description: 'Invest your funds for the future', task_notes: 'Grow your financials!'},
        {project_id: 3, task_description: 'Be a millionaire', task_notes: 'If you ain\'t talkin money I don\'t wanna talk'}
      ]);
    });
};
