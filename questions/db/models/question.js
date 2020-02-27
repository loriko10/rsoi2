'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    uid: DataTypes.INTEGER,
    date: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};