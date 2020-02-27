'use strict';

const countSeedComments = 15;
const createComments = () => {
  const users = [];

  for (let i = 0; i < countSeedComments; i++) {
    //random uid
    const uid = Math.round((Math.random() * 2) + 1);
    const qid = Math.round((Math.random() * 4) + 1);

    users.push({
      text: `test-text-${uid}`,
      uid: uid,
      qid: qid,
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return users;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', createComments(), {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
