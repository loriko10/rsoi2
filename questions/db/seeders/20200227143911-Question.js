'use strict';

const countSeedQuestions = 8;
const createQuestion = () => {
  const users = [];

  for (let i = 0; i < countSeedQuestions; i++) {
    //random uid
    const uid = Math.round((Math.random() * 2) + 1);

    users.push({
      title: `test-title-${uid}`,
      text: `test-text-${uid}`,
      uid: uid,
      date: new Date(),
      tag: `test-tag-${uid}`,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return users;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', createQuestion(), {});
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
