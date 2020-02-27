'use strict';

// not use < 3 because [id: 1-3] used in comments and questions
const countSeedUsers = 7;
const createUsers = () => {
    const users = [];

    for (let i = 0; i < countSeedUsers; i++) {
        const name = `testid${i}`;

        users.push({
            name: name,
            mail: `${name}@${name}.ru`,
            password: name
        });
    }

    return users;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', createUsers(), {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
