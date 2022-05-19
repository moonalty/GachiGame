"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      Question.belongsTo(Theme, { foreignKey: "theme_id" });
    }
  }
  Question.init(
    {
      name: {
        type: DataTypes.TEXT,
      },
      answer: {
        type: DataTypes.TEXT,
      },
      cost: {
        type: DataTypes.INTEGER,
      },
      theme_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Theme",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
